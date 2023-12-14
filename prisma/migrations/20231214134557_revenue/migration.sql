-- CreateTable
CREATE TABLE "receita" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "Ingredientes" TEXT[],
    "Preparo" TEXT[],
    "Porcoes" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "receita_pkey" PRIMARY KEY ("id")
);
