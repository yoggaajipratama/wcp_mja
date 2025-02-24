import { createError, sendStream } from "h3";
import fs from "fs";
import path from "path";

export default defineEventHandler((event) => {
    const { image } = getRouterParams(event);

    if (!image) {
        throw createError({ statusCode: 400, statusMessage: "Image parameter is required" });
    }

    const imagePath = path.resolve("public/img", image);

    if (!fs.existsSync(imagePath)) {
        throw createError({ statusCode: 404, statusMessage: "Image not found" });
    }

    return sendStream(event, fs.createReadStream(imagePath));
});
