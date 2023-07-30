import Card from "../dto/Card";

export default interface CardSearchResult {
  page: number;
  numberOfPages: number;
  cards: Card[];
}
