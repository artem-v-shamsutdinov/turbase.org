import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { createWriteStream } from "fs";
import { all_actions_file } from "../allActionsWriter";

console.log(__dirname + '/revenue.log')
var revenue_file = createWriteStream(__dirname + '/revenue.log', {flags : 'a'});

export default async function learnRevenueController(fastify: FastifyInstance) {
  // GET /
  fastify.post("/", async function (
    _request: FastifyRequest,
    reply: FastifyReply
  ) {
    var logEntry = new Date().toISOString() + '\t' + _request.ip + '\n'
    revenue_file.write(logEntry)
    all_actions_file.write('REVENUE INFO \t' + logEntry)
    reply
      .header("Content-Type", "text/html; charset=utf-8")
      .send('loaded');
  });
}
