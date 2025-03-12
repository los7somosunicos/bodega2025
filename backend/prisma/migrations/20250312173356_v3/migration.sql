/*
  Warnings:

  - You are about to drop the column `returnDue` on the `Loan` table. All the data in the column will be lost.
  - You are about to drop the `Return` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[assetId,dui]` on the table `Loan` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updateAt` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dui` to the `Loan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `Loan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Loan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Return" DROP CONSTRAINT "Return_loanId_fkey";

-- DropIndex
DROP INDEX "Loan_assetId_userId_key";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleteAt" TIMESTAMP(3),
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Loan" DROP COLUMN "returnDue",
ADD COLUMN     "contact" TEXT,
ADD COLUMN     "deleteAt" TIMESTAMP(3),
ADD COLUMN     "dui" TEXT NOT NULL,
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "returnedAt" TIMESTAMP(3),
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "quantity" DROP DEFAULT;

-- DropTable
DROP TABLE "Return";

-- CreateIndex
CREATE UNIQUE INDEX "Loan_assetId_dui_key" ON "Loan"("assetId", "dui");
