-- CreateEnum
CREATE TYPE "Language" AS ENUM ('CPP', 'JAVA', 'JAVASCRIPT', 'PYTHON');

-- CreateTable
CREATE TABLE "Code" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "language" "Language" NOT NULL,
    "stdin" TEXT,
    "source" TEXT NOT NULL,
    "stdout" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Code_pkey" PRIMARY KEY ("id")
);
