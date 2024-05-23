import http from "http";
import { app } from "./app";

const port = process.env.PORT || 8888;

let server: http.Server;
if (process.env.NODE_ENV !== "test") {
  server = app.listen(port, () => {
    console.log(`GHL app listening on port ${port}`);
  });
}

export { server };
