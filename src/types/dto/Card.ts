export type CardConstructorArguments = {
  id: number;
  name: string;
  description: string;
  attribute: string;
  fullImageUrl: string;
  smallImageUrl: string;
};

export default class Card {
  id: number;
  name: string;
  description: string;
  attribute: string;
  fullImageUrl: string;
  smallImageUrl: string;

  constructor({
    id,
    name,
    description,
    attribute,
    fullImageUrl,
    smallImageUrl,
  }: CardConstructorArguments) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.attribute = attribute;
    this.fullImageUrl = fullImageUrl;
    this.smallImageUrl = smallImageUrl;
  }
}
