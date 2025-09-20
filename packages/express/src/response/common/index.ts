import type { CreateResponseStructOptions } from "@jderstd/core/response/common/struct";
import type { Response } from "express";

import { createResponseStruct } from "@jderstd/core/response/common/struct";

/** Options of `createResponse` function. */
type CreateResponseOptions<B extends BodyInit = BodyInit> =
    CreateResponseStructOptions<B>;

/**
 * Create a response.
 *
 * ### Examples
 *
 * Example for creating a basic response:
 *
 * ```js
 * // JavaScript
 *
 * import { createResponse } from "@jderstd/express";
 *
 * const route = (req, res) => {
 *     createResponse(res);
 * };
 * ```
 *
 * ```ts
 * // TypeScript
 *
 * import type { Request, Response } from "express";
 *
 * import { createResponse } from "@jderstd/express";
 *
 * const route = (req: Request, res: Response): void => {
 *     createResponse(res);
 * };
 * ```
 *
 * Example for creating a response with status, headers, and body:
 *
 * ```js
 * // JavaScript
 *
 * import { createResponse } from "@jderstd/express";
 *
 * const route = (req, res) => {
 *     createResponse(res, {
 *         status: 404,
 *         headers: [
 *             ["Content-Type", "text/plain"],
 *         ],
 *         body: "Not Found",
 *     });
 * };
 * ```
 *
 * ```ts
 * // TypeScript
 *
 * import type { Request, Response } from "express";
 *
 * import { createResponse } from "@jderstd/express";
 *
 * const route = (req: Request, res: Response): void => {
 *     createResponse(res, {
 *         status: 404,
 *         headers: [
 *             ["Content-Type", "text/plain"],
 *         ],
 *         body: "Not Found",
 *     });
 * };
 * ```
 */
const createResponse = <B extends BodyInit>(
    res: Response,
    options?: CreateResponseOptions<B>,
) => {
    const { status, headers, body } = createResponseStruct(options);
    return res.status(status).setHeaders(new Map(headers)).send(body);
};

export type { CreateResponseOptions };
export { createResponse };
