import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function testController(fastify: FastifyInstance) {
  // GET /
  fastify.get("/", async function (
    _request: FastifyRequest,
    reply: FastifyReply
  ) {
    reply
      .header("Content-Type", "text/html; charset=utf-8")
      .send('test');
  });
}
