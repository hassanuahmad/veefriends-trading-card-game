-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pageName" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "aura" INTEGER NOT NULL,
    "skill" INTEGER NOT NULL,
    "stamina" INTEGER NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);
