import {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
  FastifyPluginOptions,
} from "fastify";
import { ControllerRevenue } from "./controller/ControllerRevenue";
import { ListController } from "./controller/ListController";
import { DeleteController } from "./controller/DeleteController";

const routes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) => {
  fastify.post("/revenue", async (req: FastifyRequest, rep: FastifyReply) => {
    return new ControllerRevenue().handle(req, rep);
  });
  fastify.get("/revenue", async (req: FastifyRequest, rep: FastifyReply) => {
    return new ListController().handle(req, rep);
  });
  fastify.delete("/revenue", async (req: FastifyRequest, rep: FastifyReply) => {
    return new DeleteController().handle(req, rep);
  });
};

export { routes };
