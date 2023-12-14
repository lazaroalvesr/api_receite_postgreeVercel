import { prisma } from "../prisma";

interface Revenue {
  name: string;
  Ingredientes: string[];
  Preparo: string[];
  Porcoes: string[];
}

class CreateRevenue {
  async execute({ name, Ingredientes, Porcoes, Preparo }: Revenue) {
    if (!name || !Ingredientes || !Preparo || !Porcoes) {
      throw new Error("itens is required to create");
    }

    const receita = await prisma.receita.create({
      data: {
        name,
        Ingredientes,
        Porcoes,
        Preparo,
      },
    });

    return receita;
  }
}

export { CreateRevenue };
