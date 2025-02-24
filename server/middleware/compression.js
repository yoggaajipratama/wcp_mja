import { defineEventHandler } from 'h3';
import compression from 'compression';

export default defineEventHandler((event) => {
  return new Promise((resolve) => {
    compression()(event.node.req, event.node.res, resolve);
  });
});
