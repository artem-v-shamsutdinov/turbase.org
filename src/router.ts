import { FastifyInstance } from "fastify";
import learnRevenueController from "./controller/learnRevenue";
import learnSecurityController from "./controller/learnSecurity";
import loadController from "./controller/load";
import subscribeController from "./controller/subscribe";
import testController from "./controller/test";

const path = require('path')

var root = path.join(__dirname, 'public')
console.log('Static directory: ')
console.log(root)

export default async function router(fastify: FastifyInstance) {
  fastify.register(learnRevenueController, { prefix: "/learnRevenue" });
  fastify.register(learnSecurityController, { prefix: "/learnSecurity" });
  fastify.register(loadController, { prefix: "/load" });
  fastify.register(subscribeController, { prefix: "/subscribe" });
  fastify.register(testController, { prefix: "/test" });
  fastify.register(require('fastify-static'), {
    root,
  //   prefix: '/', // optional: default '/'
  })
}
