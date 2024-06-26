import express from "express";
import routes from "./routes";

export function initApp() {
  const app = express();
  app.use(express.json());

  app.use(routes);

  return app;
}
