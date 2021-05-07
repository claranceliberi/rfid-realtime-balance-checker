-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('DEPOSIT', 'WITHDRAW');

-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "card_UUID" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "card_UUID" TEXT NOT NULL,
    "transaction_type" "TransactionType" NOT NULL,
    "ammount" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Card.card_UUID_unique" ON "Card"("card_UUID");

-- AddForeignKey
ALTER TABLE "Transaction" ADD FOREIGN KEY ("card_UUID") REFERENCES "Card"("card_UUID") ON DELETE CASCADE ON UPDATE CASCADE;
