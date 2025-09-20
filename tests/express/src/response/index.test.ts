import type { JsonResponse } from "@jderstd/express";
import type { Express, Request, Response as Res } from "express";
import type { Response as SuperRes } from "supertest";

import { createJsonResponse } from "@jderstd/express";
import express from "express";
import request from "supertest";
import { describe, expect, it } from "vitest";

const app: Express = express();

app.get("/", (_: Request, res: Res): void => {
    createJsonResponse(res);
});

app.get("/success", (_: Request, res: Res): void => {
    createJsonResponse(res, {
        data: {
            message: "Hello, World!",
        },
    });
});

app.get("/failure", (_: Request, res: Res): void => {
    createJsonResponse(res, {
        errors: [
            {
                code: "server",
            },
        ],
    });
});

app.get("/cookie", (_: Request, res: Res): void => {
    res.cookie("key", "value");
    createJsonResponse(res);
});

describe("createJsonResponse test", (): void => {
    it("should work", async (): Promise<void> => {
        const res: SuperRes = await request(app).get("/");

        expect(res.status).toBe(200);

        expect(JSON.parse(res.text)).toStrictEqual({
            success: true,
        } satisfies JsonResponse);
    });

    it("should work with success", async (): Promise<void> => {
        const res: SuperRes = await request(app).get("/success");

        expect(res.status).toBe(200);

        expect(JSON.parse(res.text)).toStrictEqual({
            success: true,
            data: {
                message: "Hello, World!",
            },
        } satisfies JsonResponse);
    });

    it("should work with failure", async (): Promise<void> => {
        const res: SuperRes = await request(app).get("/failure");

        expect(res.status).toBe(400);

        expect(JSON.parse(res.text)).toStrictEqual({
            success: false,
            errors: [
                {
                    code: "server",
                },
            ],
        } satisfies JsonResponse);
    });

    it("should work with cookie", async (): Promise<void> => {
        const res: SuperRes = await request(app).get("/cookie");

        expect(res.status).toBe(200);

        expect(res.headers["set-cookie"]).toStrictEqual([
            "key=value; Path=/",
        ]);

        expect(JSON.parse(res.text)).toStrictEqual({
            success: true,
        } satisfies JsonResponse);
    });
});
