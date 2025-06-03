import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

export const buildParamError = (paramName: string) => ({
  status: 400,
  json: {
    title: "Missing param",
    detail: `Param '${paramName}' is required`,
  },
});

export const worker = setupWorker(...handlers);
