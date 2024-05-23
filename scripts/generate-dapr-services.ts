import { exec } from "child_process";
import { promisify } from "util";
import * as fs from "fs";
import * as path from "path";
import * as ts from "typescript";

const execAsync = promisify(exec);

const openApiDir = path.join(__dirname, "../src/openapi");
const clientsDir = path.join(__dirname, "../src/clients");

interface OpenApiInfo {
  title: string;
  description: string;
  version: string;
  paths: Record<string, any>;
}

interface RouteDetails {
  method: string;
  route: string;
  summary: string;
  functionName: string;
}

// Step 1: Break down getMethodsFromService into 4 functions

const createSourceFile = (filePath: string) => {
  console.log(`Creating source file from: ${filePath}`);
  return ts.createSourceFile(
    "tempFile.ts",
    fs.readFileSync(filePath, "utf8"),
    ts.ScriptTarget.Latest,
  );
};

const extractClassDeclaration = (sourceFile: ts.SourceFile) => {
  console.log(`Extracting class declaration from source file`);
  return ts.forEachChild(sourceFile, (node) => {
    if (ts.isClassDeclaration(node) && node.name) {
      console.log(`Class declaration found: ${node.name.text}`);
      return node;
    }
  });
};

const extractMethodDeclarations = (classNode: ts.ClassDeclaration) => {
  console.log(`Extracting method declarations from class: ${classNode.name?.text}`);
  return classNode.members.filter(
    (member) =>
      ts.isMethodDeclaration(member) &&
      member.name &&
      ts.isIdentifier(member.name),
  ) as ts.MethodDeclaration[];
};

const convertMethodToRouteDetails = (
  method: ts.MethodDeclaration,
): RouteDetails | null => {
  const functionName = (method.name as ts.Identifier).text;
  console.log(`Converting method to route details: ${functionName}`);
  const jsDoc = ts.getJSDocTags(method);
  const httpMethod = functionName.match(/^(get|post|put|delete)/i);

  if (httpMethod && method.parameters.length > 2) {
    const routeTag = jsDoc.find(
      (tag) =>
        tag.tagName.text === "param" &&
        typeof tag.comment === "string" &&
        tag.comment.includes("url"),
    );
    const route =
      routeTag && typeof routeTag.comment === "string"
        ? routeTag.comment.split(" ")[1]
        : `/${functionName}`;
    const summaryTag = jsDoc.find((tag) => tag.tagName.text === "summary");
    const summary =
      summaryTag && typeof summaryTag.comment === "string"
        ? summaryTag.comment
        : functionName;
    return {
      method: httpMethod[0].toLowerCase(),
      route: route || "",
      summary: summary,
      functionName,
    };
  }
  return null;
};

const getMethodsFromService = (servicePath: string): RouteDetails[] => {
  console.log(`Getting methods from service: ${servicePath}`);
  if (!fs.existsSync(servicePath)) {
    throw new Error(`Service file not found: ${servicePath}`);
  }

  const sourceFile = createSourceFile(servicePath);
  const classNode = extractClassDeclaration(sourceFile);

  if (!classNode) {
    console.log(`No class declaration found in: ${servicePath}`);
    return [];
  }

  const methods = extractMethodDeclarations(classNode);
  return methods
    .map(convertMethodToRouteDetails)
    .filter(Boolean) as RouteDetails[];
};

// Step 2: Break down generateServiceFiles into 2 functions

const processOpenApiFiles = (): {
  name: string;
  openApiData: OpenApiInfo;
  servicePath: string;
}[] => {
  console.log(`Processing OpenAPI files in directory: ${openApiDir}`);
  const files = fs.readdirSync(openApiDir);
  const modules = files.filter((file) => file.endsWith(".json"));

  return modules.map((file) => {
    const filePath = path.join(openApiDir, file);
    const rawData = fs.readFileSync(filePath, "utf-8");
    const openApiData: OpenApiInfo = JSON.parse(rawData);
    const name =
      file.replace(".json", "").charAt(0).toUpperCase() +
      file.replace(".json", "").slice(1);
    const servicePath = path.join(
      clientsDir,
      `${name.toLowerCase()}/services/${name}Service.ts`,
    );
    console.log(`Processed OpenAPI file: ${file}, service path: ${servicePath}`);
    return { name, openApiData, servicePath };
  });
};

const generateServiceFiles = async () => {
  console.log(`Generating service files`);
  const modules = processOpenApiFiles();

  for (const { name, openApiData, servicePath } of modules) {
    console.log(`Generating service file for: ${name}`);
    const methods = getMethodsFromService(servicePath);

    if (methods.length === 0) {
      console.log(`No methods found for service: ${name}`);
      continue;
    }

    const serviceContent = `
      import { Injectable } from '@nestjs/common';
      import { ${name}Api } from '../api/${name}Api';

      @Injectable()
      export class ${name}Service {
        constructor(private readonly api: ${name}Api) {}

        ${methods
          .map(
            (method) => `
          /**
           * ${method.summary}
           */
          async ${method.functionName}() {
            return this.api.${method.functionName}();
          }
        `,
          )
          .join("\n")}
      }
    `;

    fs.writeFileSync(servicePath, serviceContent);
    console.log(`Service file written: ${servicePath}`);
  }
};

// Step 3: Update main function to call generateServiceFiles

const main = async () => {
  try {
    console.log(`Starting service generation process`);
    await generateServiceFiles();
    console.log(`Service generation process completed`);
  } catch (error) {
    console.error(`Error during service generation: ${error.message}`);
  }
};

main();