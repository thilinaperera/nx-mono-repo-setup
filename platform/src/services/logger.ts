import pino from "pino";
import { isProduction } from "../utils/misc";
import { Logger } from "../interfaces/Logger";

const configs = isProduction
  ? {}
  : {
      transport: {
        target: "pino-pretty",
        options: {
          colorize: true,
        },
      },
    };
export const logger: Logger = pino(configs);
