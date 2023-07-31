"use client";
import { Roboto, Black_Ops_One } from "next/font/google";
import { useState } from "react";

import CardDetail from "@/components/CardDetail";
import Card from "@/types/dto/Card";
import CardListing from "@/components/CardListing";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--roboto",
  weight: "900",
});

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  variable: "--black-ops-one",
  weight: "400",
});

export default function Home() {
  const [selectedCard, setSelectedCard] = useState<Card | undefined>(undefined);

  return (
    <main
      className={`h-screen w-screen bg-black justify-center flex py-8 ${roboto.variable} ${blackOpsOne.variable}`}
    >
      <div className="border-gray-500 border-solid border-2 w-2/5 mr-2 h-full bg-blue-600/10">
        <CardDetail card={selectedCard} />
      </div>
      <div className="border-gray-500 border-solid border-2 w-2/5 h-full bg-blue-600/10 overflow-hidden">
        <CardListing
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      </div>
    </main>
  );
}
