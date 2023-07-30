import Card, { CardConstructorArguments } from "./Card";
export type SpellCardConstructorArguments = Omit<
  CardConstructorArguments,
  "type"
> & {
  spellType: string;
};

export default class SpellCard extends Card {
  spellType: string;
  constructor(args: SpellCardConstructorArguments) {
    super({ ...args, type: "spell" });
    this.spellType = args.spellType;
  }
}
