import * as path from "node:path";

import { MarkdownPageEvent } from "typedoc-plugin-markdown";

/**
 * @param {import("typedoc-plugin-markdown").MarkdownApplication} app
 */
export const load = (app) => {
    app.renderer.on(MarkdownPageEvent.END, insert);
};

const express = path.resolve(
    process.cwd(),
    "..",
    "..",
    "apis",
    "express",
    "README.md",
);

/**
 * @param {import("typedoc-plugin-markdown").MarkdownPageEvent} page
 */
const insert = (page) => {
    if (page.filename === express) {
        const head = "[< Back](./../../README.md)\n\n";
        page.contents = head + page.contents;
    }
};
