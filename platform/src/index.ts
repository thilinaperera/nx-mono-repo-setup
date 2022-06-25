import express from "express";
import { normalizePort } from "./utils/misc";
import { logger } from "./services/logger";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello 👋! I am a Node + TypeScript Starter...");
});

app.listen(normalizePort(port), () => {
  return logger.info(`Express is listening at http://localhost:${port}`);
});
