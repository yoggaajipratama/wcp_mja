import { d as defineEventHandler, r as readBody, u as useRuntimeConfig } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'compression';

const sk = defineEventHandler(async (event) => {
  const dataEvent = await readBody(event);
  const token = dataEvent.token;
  if (token == `mLc#:0_[$c<Ki_;F`) {
    const config = useRuntimeConfig();
    return JSON.stringify(config.secretKey);
  } else {
    return JSON.stringify(null);
  }
});

export { sk as default };
//# sourceMappingURL=sk.mjs.map
