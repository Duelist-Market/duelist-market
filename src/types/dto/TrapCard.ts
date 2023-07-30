import Card, { CardConstructorArguments } from "./Card";

type TrapCardConstructorArguments = Omit<CardConstructorArguments, "type">;

export default class TrapCard extends Card {
  constructor(args: TrapCardConstructorArguments) {
    super({ ...args, type: "trap" });
  }
}
