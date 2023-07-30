import Card, { CardConstructorArguments } from "./Card";

type TrapCardConstructorArguments = Omit<CardConstructorArguments, "type"> & {
  spellType: string;
};

export default class TrapCard extends Card {
  spellType: string;
  constructor(args: TrapCardConstructorArguments) {
    super({ ...args, type: "trap" });
    this.spellType = args.spellType;
  }
}
