import Card, { CardConstructorArguments } from "./Card";
export type SpellCardConstructorArguments = Omit<
  CardConstructorArguments,
  "type"
>;

export default class SpellCard extends Card {
  constructor(args: SpellCardConstructorArguments) {
    super({ ...args, type: "spell" });
  }
}
