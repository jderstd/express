import type { ErrorRequestHandler } from "express";

import { ResponseErrorCode } from "#/response/error";
import { createJsonResponse } from "#/response/json";

/** Options for `errorRequestHandler` function. */
type ErrorRequestHandlerOptions = {
    /**
     * Whether show more information.
     * By default, it's `false`.
     */
    verbose?: boolean;
};

/**
 * Error request handler.
 *
 * Following response could be returned on error:
 *
 * ```jsonc
 * // Status: 500
 * {
 *     "success": false,
 *     "errors": [
 *         {
 *             "code": "server"
 *         }
 *     ]
 * }
 * ```
 *
 * ### Examples
 *
 * Basic example of using `errorRequestHandler` handler:
 *
 * ```js
 * // JavaScript
 *
 * import express from "express";
 * import { errorRequestHandler } from "@jderstd/express";
 *
 * const app = express();
 *
 * app.use(errorRequestHandler());
 * ```
 *
 * ```ts
 * // TypeScript
 *
 * import type { Express } from "express";
 *
 * import express from "express";
 * import { errorRequestHandler } from "@jderstd/express";
 *
 * const app: Express = express();
 *
 * app.use(errorRequestHandler());
 * ```
 *
 * Show more information with `verbose` option:
 *
 * ```js
 * // JavaScript
 *
 * import express from "express";
 * import { errorRequestHandler } from "@jderstd/express";
 *
 * const app = express();
 *
 * app.use(errorRequestHandler({ verbose: true }));
 * ```
 *
 * ```ts
 * // TypeScript
 *
 * import type { Express } from "express";
 *
 * import express from "express";
 * import { errorRequestHandler } from "@jderstd/express";
 *
 * const app: Express = express();
 *
 * app.use(errorRequestHandler({ verbose: true }));
 * ```
 */
const errorRequestHandler = (
    options?: ErrorRequestHandlerOptions,
): ErrorRequestHandler => {
    return (err, _req, res, _next) => {
        return createJsonResponse(res, {
            status: 500,
            errors: [
                {
                    code: ResponseErrorCode.Server,
                    ...(options?.verbose && {
                        message:
                            err instanceof Error ? err.message : String(err),
                    }),
                },
            ],
        });
    };
};

export type { ErrorRequestHandlerOptions };
export { errorRequestHandler };
