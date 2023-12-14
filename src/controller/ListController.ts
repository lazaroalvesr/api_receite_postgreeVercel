import { FastifyReply, FastifyRequest } from "fastify";
import { ListRevenue } from "../service/ListRevenue";

class ListController {
  async handle(req: FastifyRequest, rep: FastifyReply) {
    const list = new ListRevenue();
    const receita = await list.execute();
    rep.send(receita);
  }
}

export { ListController };
