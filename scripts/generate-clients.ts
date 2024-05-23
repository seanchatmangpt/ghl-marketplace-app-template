import { exec } from "child_process";
import { promisify } from "util";
import * as path from "path";
import * as fs from "fs";

const execAsync = promisify(exec);

const openApiSpecs = [
  "businesses.json",
  "calendars.json",
  "campaigns.json",
  "companies.json",
  "contacts.json",
  "conversations.json",
  "courses.json",
  "forms.json",
  "funnels.json",
  "invoices.json",
  "links.json",
  "locations.json",
  "medias.json",
  "oauth.json",
  "opportunities.json",
  "payments.json",
  "products.json",
  "saas-api.json",
  "snapshots.json",
  "social-media-posting.json",
  "surveys.json",
  "users.json",
  "workflows.json",
];

const generateClients = async () => {
  const promises = openApiSpecs.map(async (spec) => {
    const nameWithHyphen = path.basename(spec, ".json");
    const name = nameWithHyphen.replace(/-/g, "_");
    const inputPath = path.join("src", "openapi", spec);
    const outputPath = path.join("src", "clients", name);

    const command = `npx openapi-typescript-codegen --input ${inputPath} --output ${outputPath} --client axios --exportSchemas true --indent 2 --useOptions --request ./src/openapi/customRequest.ts`;
    console.log(`Generating client for ${name}...`);

    await execAsync(command);
    return name;
  });

  const clientNames = await Promise.all(promises);

  // Generate index.ts
  const indexPath = path.join("src", "clients", "index.ts");
  const importStatements = clientNames
    .map((name) => `import * as ${name} from './${name}';`)
    .join("\n");

  const exportStatements = `export {\n${clientNames.map((name) => `  ${name},`).join("\n")}\n};\n`;

  const indexContent = `${importStatements}\n\n${exportStatements}`;
  await fs.promises.writeFile(indexPath, indexContent);

  console.log("All clients generated and index.ts created successfully.");
};

generateClients().catch((error) => {
  console.error("Error generating clients:", error);
  process.exit(1);
});
