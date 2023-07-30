import CardSearchResult from "@/types/api/CardSearchResult";
import Card from "@/types/dto/Card";
import Image from "next/image";
import { use, useEffect, useState } from "react";
export default function CardListing() {
  const [name, setName] = useState<string>("");
  const [cards, setCards] = useState<Card[]>([]);
  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleSearchUpdate = async (searchKey: string, page: number) => {
    const result = await fetchCards(searchKey, page);
    setCards(result.cards);
    setNumberOfPages(result.numberOfPages);
    setCurrentPage(result.page);
  };

  useEffect(() => {
    const timeoutId = setTimeout(
      () => handleSearchUpdate(name, currentPage),
      500
    );
    return () => clearTimeout(timeoutId);
  }, [name, currentPage]);

  const handleSearchKeyChange = async (searchKey: string) => {
    setName(searchKey);
    setCurrentPage(1);
  };

  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <SearchBar searchKey={name} onChange={handleSearchKeyChange} />
      <CardList cards={cards} />
      {cards.length === 0 && (
        <h1 className="font-sans text-xl block self-center">
          No search results
        </h1>
      )}
      {currentPage > 1 && (
        <button className="block self-start" onClick={previousPage}>
          Previous
        </button>
      )}
      {currentPage < numberOfPages && (
        <button className="block self-end" onClick={nextPage}>
          Next
        </button>
      )}
    </div>
  );
}

function SearchBar(props: {
  searchKey: string;
  onChange: (searchKey: string) => any;
}) {
  return (
    <div className="flex w-full p-4 bg-black">
      <input
        value={props.searchKey}
        onChange={(e) => props.onChange(e.target.value)}
        className="flex-1 p-2 border-2 border-gray-500 rounded-md text-black font-sans"
      />
    </div>
  );
}

function CardList(props: { cards: Card[] }) {
  return (
    <div className="flex flex-wrap p-4 overflow-scroll no-scrollbar">
      {props.cards.map((card) => (
        <div
          style={{ width: "10%" }}
          className="m-2 cursor-pointer border-2 border-gray-500"
          title={card.name}
        >
          <Image
            key={card.id}
            src={card.smallImageUrl}
            alt={card.name}
            width={168}
            height={246}
          />
        </div>
      ))}
    </div>
  );
}

async function fetchCards(
  name: string,
  page: number = 1
): Promise<CardSearchResult> {
  const res = await fetch(
    "/api/cards?" + new URLSearchParams({ name, page: page.toString() })
  );

  if (res.ok) {
    return (await res.json()) as CardSearchResult;
  } else {
    throw new Error("Failed to fetch cards...");
  }
}
