import Card from "@/types/dto/Card";
import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/app/db/client";
import { Prisma } from "@prisma/client";
import MonsterCard from "@/types/dto/MonsterCard";
import SpellCard from "@/types/dto/SpellCard";
import TrapCard from "@/types/dto/TrapCard";

export async function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get("name");
  const page = request.nextUrl.searchParams.get("page") || "1";

  const query: Prisma.cardFindManyArgs = {
    orderBy: { name: "asc" },
    take: 40,
    skip: (parseInt(page) - 1) * 40,
    include: {
      card_subtype: true,
    },
  };

  if (name) {
    query.where = { name: { contains: name, mode: "insensitive" } };
  }

  const numberOfResults = await prisma.card.count({ where: query.where });

  const numberOfPages = Math.ceil(numberOfResults / 40);

  const dbCards = await prisma.card.findMany(query);

  const cards = mapDBResultToCards(dbCards);

  return NextResponse.json(
    { cards, numberOfPages, page: parseInt(page) },
    { status: 200 }
  );
}

function mapDBResultToCards(dbCards: any) {
  return dbCards.map((dbCard: any) => {
    switch (dbCard.card_type) {
      case "monster":
        return mapDBMonsterToCard(dbCard);
      case "spell":
        return mapDBSpellToCard(dbCard);
      case "trap":
        return mapDBTrapToCard(dbCard);
    }
  });
}

function mapDBMonsterToCard(dbCard: any) {
  const card = new MonsterCard({
    id: dbCard.id,
    name: dbCard.name,
    description: dbCard.description,
    attribute: dbCard.attribute,
    level: dbCard.level,
    attack: dbCard.attack,
    defense: dbCard.defense,
    subTypes: dbCard.card_subtype.map((subType: any) => subType.subtype),
    monsterType: dbCard.monster_type,
    fullImageUrl: dbCard.full_image_url,
    smallImageUrl: dbCard.small_image_url,
  });

  return card;
}

function mapDBSpellToCard(dbCard: any) {
  const card = new SpellCard({
    id: dbCard.id,
    name: dbCard.name,
    description: dbCard.description,
    spellType: dbCard.attribute,
    fullImageUrl: dbCard.full_image_url,
    smallImageUrl: dbCard.small_image_url,
  });

  return card;
}

function mapDBTrapToCard(dbCard: any) {
  const card = new TrapCard({
    id: dbCard.id,
    name: dbCard.name,
    description: dbCard.description,
    spellType: dbCard.attribute,
    fullImageUrl: dbCard.full_image_url,
    smallImageUrl: dbCard.small_image_url,
  });

  return card;
}
