-- CreateTable
CREATE TABLE "attribute" (
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "attribute_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "card" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "card_type" VARCHAR(50) NOT NULL,
    "description" VARCHAR(1000) NOT NULL,
    "attack" INTEGER,
    "defense" INTEGER,
    "level" INTEGER,
    "monster_type" VARCHAR(50),
    "attribute" VARCHAR(50) NOT NULL,
    "full_image_url" VARCHAR(255) NOT NULL,
    "small_image_url" VARCHAR(255) NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "card_subtype" (
    "card_id" INTEGER NOT NULL,
    "subtype" VARCHAR(50) NOT NULL,

    CONSTRAINT "card_sub_type_pkey" PRIMARY KEY ("card_id","subtype")
);

-- CreateTable
CREATE TABLE "card_type" (
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "card_type_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "monster_type" (
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "monster_type_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "subtype" (
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "sub_type_pkey" PRIMARY KEY ("name")
);

-- CreateIndex
CREATE UNIQUE INDEX "card_name_key" ON "card"("name");

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_attribute_fkey" FOREIGN KEY ("attribute") REFERENCES "attribute"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_card_type_fkey" FOREIGN KEY ("card_type") REFERENCES "card_type"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_monster_type_fkey" FOREIGN KEY ("monster_type") REFERENCES "monster_type"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "card_subtype" ADD CONSTRAINT "card_sub_type_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "card"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "card_subtype" ADD CONSTRAINT "card_sub_type_sub_type_fkey" FOREIGN KEY ("subtype") REFERENCES "subtype"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;

