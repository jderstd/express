import type { JsonResponse } from "@jderstd/express";
import type { Express, Request, Response as Res } from "express";
import type { Response as SuperRes } from "supertest";

import { createJsonResponse, errorRequestHandler } from "@jderstd/express";
import express from "express";
import request from "supertest";
import { describe, expect, it } from "vitest";

const app: Express = express();

app.get("/", (_: Request, res: Res): void => {
    createJsonResponse(res);
});

app.get("/failure", (): void => {
    throw new Error("Goodbye, World!");
});

app.use(
    errorRequestHandler({
        verbose: true,
    }),
);

describe("errorRequestHandler test", (): void => {
    it("should work", async (): Promise<void> => {
        const res: SuperRes = await request(app).get("/");

        expect(res.status).toBe(200);

        expect(JSON.parse(res.text)).toStrictEqual({
            success: true,
        } satisfies JsonResponse);
    });

    it("should work with throw", async (): Promise<void> => {
        const res: SuperRes = await request(app).get("/failure");

        expect(res.status).toBe(500);

        expect(JSON.parse(res.text)).toStrictEqual({
            success: false,
            errors: [
                {
                    code: "server",
                    message: "Goodbye, World!",
                },
            ],
        } satisfies JsonResponse);
    });
});
