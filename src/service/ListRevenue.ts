import { prisma } from "../prisma";

class ListRevenue {
  async execute() {
    const list = await prisma.receita.findMany();
    return list;
  }
}

export { ListRevenue };
