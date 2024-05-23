import request from "supertest";
import {
  describe,
  it,
  expect,
  beforeAll,
  afterEach,
  afterAll,
  vi,
} from "vitest";
import nock from "nock";
import app from "../src/app";
import { GHL } from "../src/ghl";

// Mock the GHL class
vi.mock("../src/ghl", () => {
  return {
    GHL: vi.fn().mockImplementation(() => ({
      authorizationHandler: vi.fn(),
    })),
  };
});

describe("GET /authorize-handler", () => {
  let ghlMock: any;

  beforeAll(() => {
    // Initialize the mock for the GHL class
    ghlMock = new GHL();
    vi.mocked(ghlMock.authorizationHandler).mockResolvedValue(undefined);

    // Mock the network request to gohighlevel
    nock("https://marketplace.gohighlevel.com")
      .get("/oauth/chooselocation")
      .reply(200, { message: "Authorization success" });

    // Mock the request to the local server
    // Mock the request to the local server with a wildcard for the port
    nock(/http:\/\/127\.0\.0\.1:\d+/)
      .get("/authorize-handler")
      .query({ code: "test_code" })
      .reply(302, undefined, { Location: "https://app.gohighlevel.com/" });

    nock.disableNetConnect();
    nock.enableNetConnect("127.0.0.1");
  });

  afterEach(() => {
    nock.cleanAll();
    vi.clearAllMocks();
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it("should handle authorization and redirect to gohighlevel app", async () => {
    const code = "test_code";
    const response = await request(app)
      .get("/authorize-handler")
      .query({ code });

    expect(response.status).toBe(302);
    expect(response.header["location"]).toBe("https://app.gohighlevel.com/");
    expect(ghlMock.authorizationHandler).toHaveBeenCalledWith(code);
  });

  it("should return 500 if authorizationHandler fails", async () => {
    vi.mocked(ghlMock.authorizationHandler).mockRejectedValue(
      new Error("Authorization failed"),
    );

    const response = await request(app)
      .get("/authorize-handler")
      .query({ code: "test_code" });

    expect(response.status).toBe(500);
    expect(response.text).toBe("Failed to handle authorization.");
  });
});
