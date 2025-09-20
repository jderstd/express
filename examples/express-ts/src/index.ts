import type { Express, Request, Response } from "express";

import { createJsonResponse, errorRequestHandler } from "@jderstd/express";
import express from "express";

const app: Express = express();

app.get("/", (_req: Request, res: Response): void => {
    createJsonResponse(res);
});

app.use(
    errorRequestHandler({
        verbose: true,
    }),
);

app.listen(3000);
