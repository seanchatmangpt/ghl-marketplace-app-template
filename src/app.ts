import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { GHL } from "./ghl";
import * as CryptoJS from "crypto-js";
import { json } from "body-parser";
import http from "http";
import { SearchService } from "./clients/users";
import { CalendarServiceLocator } from "./clients/calendars/locators/CalendarServiceLocator";

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
  "calendars.readonly",
  "calendars.write",
  "calendars/groups.readonly",
  "calendars/groups.write",
  "calendars/resources.readonly",
  "calendars/resources.write",
  "calendars/events.readonly",
  "calendars/events.write",
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
  const { companyId } = req.query;
  const resourceId: string = companyId as string;
  const cls = new CalendarServiceLocator();

  const cals = await cls
    .getCalendarsService(resourceId)
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
