-- CreateTable
CREATE TABLE "Numbers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "r_numbers" JSONB NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Numbers_pkey" PRIMARY KEY ("id")
);
