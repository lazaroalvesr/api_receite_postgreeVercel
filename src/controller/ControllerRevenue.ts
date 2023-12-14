import { FastifyReply, FastifyRequest } from "fastify";
import { CreateRevenue } from "../service/CreateRevenue";

class ControllerRevenue {
  async handle(req: FastifyRequest, rep: FastifyReply) {
    const { name, Ingredientes, Porcoes, Preparo } = req.body as {
      name: string;
      Ingredientes: string[];
      Porcoes: string[];
      Preparo: string[];
    };

    const revenue = new CreateRevenue();
    const createRevenue = await revenue.execute({
      name,
      Ingredientes,
      Porcoes,
      Preparo,
    });
    rep.send(createRevenue);
  }
}

export {ControllerRevenue}