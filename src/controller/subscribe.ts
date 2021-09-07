import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { createWriteStream } from "fs";
import { all_actions_file } from "../allActionsWriter";

console.log(__dirname + '/subscriptions.log')

var subscriptions_file = createWriteStream(__dirname + '/subscriptions.log', { flags: 'a' });

export default async function subscribeController(fastify: FastifyInstance) {
    // GET /
    fastify.post("/", async function (
        _request: FastifyRequest,
        reply: FastifyReply
    ) {
        const body = _request.body

        if (!body || typeof body !== 'string') {
            reply
                .header("Content-Type", "text/html; charset=utf-8")
                .send('not subscribed');
        }
        const fields = (body as string).split('&')
        if (fields.length !== 2 || !fields[0] || !fields[1]) {
            reply
                .header("Content-Type", "text/html; charset=utf-8")
                .send('not subscribed');
        }
        const subscriptionLinkNumberFieldParts = fields[0].split('=')
        const emailFieldParts = fields[1].split('=')
        if (subscriptionLinkNumberFieldParts.length !== 2
            || subscriptionLinkNumberFieldParts[0] !== 'linkNumber'
            || !subscriptionLinkNumberFieldParts[1]
            || emailFieldParts.length !== 2
            || emailFieldParts[0] !== 'email'
            || !emailFieldParts[1]) {
            reply
                .header("Content-Type", "text/html; charset=utf-8")
                .send('not subscribed');
        }
        var logEntry = new Date().toISOString() +  '\t' + _request.ip + '\t' + subscriptionLinkNumberFieldParts[1] + '\t' + emailFieldParts[1] + '\n'
        subscriptions_file.write(logEntry)
        all_actions_file.write('SUBSCRIBE    \t' + logEntry)
        reply
            .header("Content-Type", "text/html; charset=utf-8")
            .send('subscribed');
    });
}
