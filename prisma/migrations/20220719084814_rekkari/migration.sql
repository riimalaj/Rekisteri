-- CreateTable
CREATE TABLE "huolto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "kohde" TEXT NOT NULL,
    "huolto" TEXT NOT NULL,
    "pvm" DATETIME NOT NULL
);
