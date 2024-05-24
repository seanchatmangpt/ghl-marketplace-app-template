import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { GHL } from "./ghl";
import * as CryptoJS from "crypto-js";
import { json } from "body-parser";
import http from "http";
import { SearchService } from "./clients/users";
import { CalendarServiceLocator } from "./clients/calendars/locators/CalendarServiceLocator";
import { faker } from "@faker-js/faker";

dotenv.config();

const path = __dirname + "/ui/dist/";
const app: Express = express();
app.use(json({ type: "application/json" }));
app.use(express.static(path));

const ghl = new GHL();
const CLIENT_ID = process.env.GHL_APP_CLIENT_ID || "";
const REDIRECT_URI = "http://localhost:8888/authorize-handler";
const SCOPES = [
  "conversations/message.readonly",
  "conversations/message.write",
  "users.readonly",
  "contacts.readonly",
  "contacts.write",
];

function constructAuthUrl(): string {
  const baseUrl = "https://marketplace.gohighlevel.com/oauth/chooselocation";
  const params = new URLSearchParams({
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    client_id: CLIENT_ID,
    scope: SCOPES.join(" "),
  });
  return `${baseUrl}?${params.toString()}`;
}

app.get("/generate-auth-url", (req: Request, res: Response) => {
  try {
    const authUrl = constructAuthUrl();
    res.redirect(authUrl);
  } catch (error) {
    res.status(500).send("Failed to generate authorization URL.");
  }
});

app.get("/authorize-handler", async (req: Request, res: Response) => {
  const { code } = req.query;
  await ghl.authorizationHandler(code as string);
  res.redirect("https://app.gohighlevel.com/");
});

app.get("/example-api-call", async (req: Request, res: Response) => {
  // const { companyId } = req.query;
  // const resourceId: string = companyId as string;
  const cls = new CalendarServiceLocator();

  const cals = await cls
    .getCalendarsService("123")
    .getCalendar("tQFpDJNmmvYaF4q9EIen");
  res.send(cals);
  //   try {
  //     const response = await SearchService.searchUsers({
  //       version: "2021-07-28",
  //       authorization: `Bearer ${ghl.model.getAccessToken(companyId as string)}`,
  //       companyId: companyId as string,
  //   });
  //     return res.send(response);
  //   } catch (error) {
  //     console.log(error);
  //     return res.status(500).send("Failed to fetch opportunities.");
  //   }
  // }
  // return res.status(400).send("Installation for this company does not exist");
});

app.get("/upsert", async (req: Request, res: Response) => {
  if (true) {
    try {
      const contactData = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
        locationId: "WjE2vwuRjOgB2AKofzpd",
        gender: faker.name.sexType(),
        phone: faker.phone.number("+1 ### ### ####"),
        address1: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        postalCode: faker.address.zipCode(),
        website: faker.internet.url(),
        timezone: faker.address.timeZone(),
        dnd: faker.datatype.boolean(),
        tags: [faker.random.word(), faker.random.word()],
        customFields: [
          {
            id: faker.datatype.uuid(),
            key: "my_custom_field",
            field_value: faker.phone.number(),
          },
        ],
        source: "public api",
        country: "US",
        companyName: faker.company.name(),
      };

      const request = await ghl
        .requests("WjE2vwuRjOgB2AKofzpd")
        .post("/contacts/upsert", contactData, {
          headers: {
            Version: "2021-07-28",
            "Content-Type": "application/json",
          },
        });

      return res.send(request.data);
    } catch (error) {
      console.log(error);
      return res.status(500).send("Failed to upsert contact.");
    }
  } else {
    return res.send("Installation for this company does not exist.");
  }
});

app.get("/example-api-call-location", async (req: Request, res: Response) => {
  // try {
  //   if (ghl.checkInstallationExists(req.params.locationId)) {
  //     const request = await ghl
  //       .requests(req.query.locationId as string)
  //       .get(`/contacts/?locationId=${req.query.locationId}`, {
  //         headers: {
  //           Version: "2021-07-28",
  //         },
  //       });
  //     return res.send(request.data);
  //   } else {
  //     await ghl.getLocationTokenFromCompanyToken(
  //       req.query.companyId as string,
  //       req.query.locationId as string,
  //     );
  //     const request = await ghl
  //       .requests(req.query.locationId as string)
  //       .get(`/contacts/?locationId=${req.query.locationId}`, {
  //         headers: {
  //           Version: "2021-07-28",
  //         },
  //       });
  //     return res.send(request.data);
  //   }
  // } catch (error) {
  //   console.log(error);
  //   res.send(error).status(400);
  // }
});

app.post("/example-webhook-handler", async (req: Request, res: Response) => {
  console.log(req.body);
});

app.post("/decrypt-sso", async (req: Request, res: Response) => {
  const { key } = req.body || {};
  if (!key) {
    return res.status(400).send("Please send valid key");
  }
  try {
    const data = ghl.decryptSSOData(key);
    res.send(data);
  } catch (error) {
    res.status(400).send("Invalid Key");
    console.log(error);
  }
});

app.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

export { app };
