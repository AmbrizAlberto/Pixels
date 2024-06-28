/*
  Warnings:

  - Added the required column `authorId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Made the column `updatedAt` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "authorId" INTEGER NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
