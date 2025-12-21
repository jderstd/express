import type { JsonResponse } from "@jderstd/core";
import type { CreateJsonResponseStructOptions } from "@jderstd/core/response/json/struct";
import type { Response } from "express";

import { createJsonResponseStruct } from "@jderstd/core/response/json/struct";

/** Options of `createJsonResponse` function. */
type CreateJsonResponseOptions<D = unknown> =
    CreateJsonResponseStructOptions<D>;

/**
 * Create a JSON response with context.
 *
 * ### Examples
 *
 * Example for creating a successful JSON response without data:
 *
 * ```js
 * // JavaScript
 *
 * import { createJsonResponse } from "@jderstd/express";
 *
 * const route = (req, res) => {
 *     createJsonResponse(res);
 * };
 * ```
 *
 * ```ts
 * // TypeScript
 *
 * import type { Request, Response } from "express";
 *
 * import { createJsonResponse } from "@jderstd/express";
 *
 * const route = (req: Request, res: Response): void => {
 *     createJsonResponse(res);
 * };
 * ```
 *
 * Example for creating a successful JSON response with data:
 *
 * ```js
 * // JavaScript
 *
 * import { createJsonResponse } from "@jderstd/express";
 *
 * const route = (req, res) => {
 *     return createJsonResponse(res, {
 *         data: "Hello, World!",
 *     });
 * };
 * ```
 *
 * ```ts
 * // TypeScript
 *
 * import type { Request, Response } from "express";
 *
 * import { createJsonResponse } from "@jderstd/express";
 *
 * const route = (req: Request, res: Response): void => {
 *     return createJsonResponse(res, {
 *         data: "Hello, World!",
 *     });
 * };
 * ```
 *
 * Example for creating a failed JSON response:
 *
 * ```js
 * // JavaScript
 *
 * import { createJsonResponse } from "@jderstd/express";
 *
 * const route = (req, res) => {
 *     return createJsonResponse(res, {
 *         errors: [
 *             {
 *                 code: "server",
 *                 message: "Internal server error",
 *             },
 *         ],
 *     });
 * };
 * ```
 *
 * ```ts
 * // TypeScript
 *
 * import type { Request, Response } from "express";
 *
 * import { createJsonResponse } from "@jderstd/express";
 *
 * const route = (req: Request, res: Response): void => {
 *     return createJsonResponse(res, {
 *         errors: [
 *             {
 *                 code: "server",
 *                 message: "Internal server error",
 *             },
 *         ],
 *     });
 * };
 * ```
 */
const createJsonResponse = <D = unknown>(
    res: Response,
    options?: CreateJsonResponseOptions<D>,
): Response<JsonResponse<D>, Record<string, any>> => {
    const { status, headers, json } = createJsonResponseStruct<D>(options);
    return res.status(status).setHeaders(new Map(headers)).json(json);
};

export type { CreateJsonResponseOptions };
export { createJsonResponse };
