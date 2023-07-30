export type CardConstructorArguments = {
  id: number;
  name: string;
  type: CardType;
  description: string;
  attribute: string;
  fullImageUrl: string;
  smallImageUrl: string;
};

export type CardType = "monster" | "spell" | "trap";

export default class Card {
  id: number;
  name: string;
  type: CardType;
  description: string;
  attribute: string;
  fullImageUrl: string;
  smallImageUrl: string;

  constructor({
    id,
    name,
    type,
    description,
    attribute,
    fullImageUrl,
    smallImageUrl,
  }: CardConstructorArguments) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.description = description;
    this.attribute = attribute;
    this.fullImageUrl = fullImageUrl;
    this.smallImageUrl = smallImageUrl;
  }
}
