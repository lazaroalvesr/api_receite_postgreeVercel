import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteRevenue } from "../service/DeleteRevenue";

class DeleteController {
  async handle(req: FastifyRequest, rep: FastifyReply) {
    const { id } = req.query as { id: string };
    const deleteId = new DeleteRevenue();
    const userDelete = await deleteId.execute({ id });
    rep.send(userDelete);
  }
}

export { DeleteController };
