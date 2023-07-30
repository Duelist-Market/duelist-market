import Card, { CardConstructorArguments } from "./Card";

export type MonsterCardConstructorArguments = Omit<
  CardConstructorArguments,
  "type"
> & {
  attack: number;
  defense: number;
  level: number;
  monsterType: string;
  attribute: string;
  subTypes: string[];
};

export default class MonsterCard extends Card {
  attack: number;
  defense: number;
  level: number;
  monsterType: string;
  subTypes: string[];
  attribute: string;

  constructor(args: MonsterCardConstructorArguments) {
    const {
      id,
      name,
      description,
      attribute,
      fullImageUrl,
      smallImageUrl,
      attack,
      defense,
      level,
      monsterType,
      subTypes,
    } = args;

    super({
      id,
      name,
      type: "monster",
      description,
      fullImageUrl,
      smallImageUrl,
    });
    this.attack = attack;
    this.defense = defense;
    this.level = level;
    this.monsterType = monsterType;
    this.subTypes = subTypes;
    this.attribute = attribute;
  }
}
