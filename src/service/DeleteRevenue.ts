import { prisma } from "../prisma";

interface RevenueProps {
  id: string;
}

class DeleteRevenue {
  async execute({ id }: RevenueProps) {
    if (!id) {
      throw new Error("is is required");
    }

    const deleteId = await prisma.receita.findFirst({
      where: {
        id: id,
      },
    });

    if (!deleteId) {
      throw new Error("is is required");
    }

    await prisma.receita.delete({
      where: {
        id: deleteId.id,
      },
    });

    return deleteId;
  }
}

export { DeleteRevenue };
