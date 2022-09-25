-- CreateTable
CREATE TABLE "Card" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "pageName" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "aura" INTEGER NOT NULL,
    "skill" INTEGER NOT NULL,
    "stamina" INTEGER NOT NULL
);
