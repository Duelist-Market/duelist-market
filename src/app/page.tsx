import { Roboto, Black_Ops_One } from "next/font/google";

import CardDetail from "@/components/CardDetail";
import MonsterCard from "@/types/dto/MonsterCard";
import SpellCard from "@/types/dto/SpellCard";

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

const sampleMonster = new MonsterCard({
  id: 6511113,
  name: "Traptrix Rafflesia",
  description: `2 Level 4 monsters\nThis card is unaffected by Trap effects while it has Xyz Material. ""Traptrix"" monsters you control, except ""Traptrix Rafflesia"", cannot be destroyed by battle or card effects. Your opponent cannot target ""Traptrix"" monsters you control, except ""Traptrix Rafflesia"", with card effects. Once per turn, during either player's turn: You can detach 1 Xyz Material from this card and send 1 ""Hole"" Normal Trap Card that meets its activation conditions from your Deck to the Graveyard; this effect becomes that Trap Card's effect when that card is activated.`,
  attribute: "earth",
  level: 4,
  attack: 300,
  defense: 2500,
  monsterType: "plant",
  fullImageUrl:
    "https://duelistmarketimages.s3.amazonaws.com/card_images/full/6511113.jpg",
  smallImageUrl:
    "https://duelistmarketimages.s3.amazonaws.com/card_images/small/6511113.jpg",
  subTypes: ["xyz", "effect"],
});

const sampleSpell = new SpellCard({
  id: 34541863,
  name: '"A" Cell Breeding Device',
  description:
    "During each of your Standby Phases, put 1 A-Counter on 1 face-up monster your opponent controls.",
  spellType: "continuous",
  fullImageUrl:
    "https://duelistmarketimages.s3.amazonaws.com/card_images/full/34541863.jpg",
  smallImageUrl:
    "https://duelistmarketimages.s3.amazonaws.com/card_images/small/34541863.jpg",
});

export default function Home() {
  return (
    <main
      className={`h-screen w-screen bg-black justify-center flex py-8 ${roboto.variable} ${blackOpsOne.variable}`}
    >
      <div className="border-gray-500 border-solid border-2 w-2/5 mr-2 h-full bg-blue-600/10">
        <CardDetail card={sampleMonster} />
      </div>
      <div className="border-gray-500 border-solid border-2 w-2/5 h-full bg-blue-600/10"></div>
    </main>
  );
}
