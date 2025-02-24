import { d as defineEventHandler, g as getRouterParams, c as createError, s as sendStream } from '../../../nitro/nitro.mjs';
import fs from 'fs';
import path from 'path';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'compression';

const _image__get = defineEventHandler((event) => {
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

export { _image__get as default };
//# sourceMappingURL=_image_.get.mjs.map
