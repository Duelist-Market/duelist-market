import Card from "@/types/dto/Card";
import MonsterCard from "@/types/dto/MonsterCard";
import SpellCard from "@/types/dto/SpellCard";
import { faSwords, faShield } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

interface CardProps {
  card: Card;
}

const frameColors = {
  monster: {
    normal: "bg-yellow-300/50",
    effect: "bg-amber-900/50",
    ritual: "bg-blue-300/50",
    fusion: "bg-purple-300/50",
    xyz: "bg-black",
    synchro: "bg-white",
    link: "bg-blue-600/50",
  },
};

export default function CardDetail(props: CardProps) {
  let bgColor = "";
  let fontColor = "text-white";
  let attributeImage = "";
  let attributeAlt = "";
  let subTypes: string[] = [];

  if (props.card.type === "monster") {
    const monsterCard = props.card as MonsterCard;
    attributeImage = `https://duelistmarketimages.s3.amazonaws.com/attributes/${monsterCard.attribute}.png`;
    attributeAlt = `${monsterCard.attribute} attribute.`;
    subTypes = monsterCard.subTypes;
    if (subTypes.includes("normal")) {
      bgColor = frameColors.monster.normal;
    } else if (subTypes.includes("fusion")) {
      bgColor = frameColors.monster.fusion;
    } else if (subTypes.includes("ritual")) {
      bgColor = frameColors.monster.ritual;
    } else if (subTypes.includes("synchro")) {
      bgColor = frameColors.monster.synchro;
      fontColor = "text-black";
    } else if (subTypes.includes("xyz")) {
      bgColor = frameColors.monster.xyz;
    } else if (subTypes.includes("link")) {
      bgColor = frameColors.monster.link;
    } else {
      bgColor = frameColors.monster.effect;
    }
  } else if (props.card.type === "spell") {
    bgColor = "bg-green-600/50";
    attributeImage = `https://duelistmarketimages.s3.amazonaws.com/attributes/spell.svg`;
    attributeAlt = `Spell card.`;
    subTypes = ["Spell Card"];
  }

  return (
    <div className="flex flex-col max-h-full overflow-hidden">
      <Name
        name={props.card.name}
        fontColor={fontColor}
        bgColor={bgColor}
        attributeImage={attributeImage}
        attributeAlt={attributeAlt}
      />
      <div className="flex w-full p-4">
        <div className="flex-1">
          <Image
            src={props.card.fullImageUrl}
            alt={props.card.name}
            width={256}
            height={373}
          />
        </div>
        <div className="flex-1 flex flex-col">
          <CardInfo card={props.card} />
        </div>
      </div>
      <SubTypes subTypes={subTypes} bgColor={bgColor} fontColor={fontColor} />
      <div className="overflow-y-scroll no-scrollbar">
        <p className="text-white p-4 whitespace-pre-wrap font-sans">
          {props.card.description.replace(/\"\"/g, '"')}
        </p>
      </div>
    </div>
  );
}

function Name(props: {
  name: string;
  fontColor: string;
  bgColor: string;
  attributeImage: string;
  attributeAlt: string;
}) {
  return (
    <div className={`w-full py-2 flex ${props.bgColor} px-2 justify-between`}>
      <h1 className={`font-bold ${props.fontColor} block font-sans`}>
        {props.name}
      </h1>
      <Image
        className="block"
        src={props.attributeImage}
        alt={props.attributeAlt}
        width={25}
        height={25}
      />
    </div>
  );
}

function SubTypes(props: {
  subTypes: string[];
  bgColor: string;
  fontColor: string;
}) {
  return (
    <div className={`w-full py-2 flex ${props.bgColor} px-2 justify-between`}>
      <h1 className={`font-bold ${props.fontColor} block font-sans`}>
        [
        {props.subTypes
          .map((type) => type.charAt(0).toUpperCase() + type.slice(1))
          .join("/")}
        ]
      </h1>
    </div>
  );
}

function CardInfo(props: { card: Card }) {
  return (
    <div className="flex-1 flex flex-col">
      {props.card.type === "monster" ? (
        <MonsterCardInfo card={props.card as MonsterCard} />
      ) : null}
      {props.card.type === "spell" ? (
        <SpellCardInfo card={props.card as SpellCard} />
      ) : null}
    </div>
  );
}

function MonsterCardInfo(props: { card: MonsterCard }) {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image
            className="block mr-1"
            src={`https://duelistmarketimages.s3.amazonaws.com/star.png`}
            alt={`Level`}
            width={20}
            height={20}
          />
          <div className="font-bold text-xl font-mono">{props.card.level}</div>
        </div>
        <Image
          src={`https://duelistmarketimages.s3.amazonaws.com/types/${props.card.monsterType}.webp`}
          alt={`${(props.card as MonsterCard).monsterType} type monster.`}
          width={40}
          height={40}
        />
      </div>
      <div className="flex justify-between">
        <FontAwesomeIcon icon={faSwords} width={25} height={25} />
        <div className="font-bold text-xl font-mono">{props.card.attack}</div>
      </div>
      <div className="flex justify-between">
        <FontAwesomeIcon icon={faShield} width={25} height={25} />
        <div className="font-bold text-xl font-mono">{props.card.defense}</div>
      </div>
    </>
  );
}

function SpellCardInfo(props: { card: SpellCard }) {
  let spellType = "Normal Spell";

  switch (props.card.spellType) {
    case "quick-play":
      spellType = "Quick-Play Spell";
      break;
    case "field":
      spellType = "Field Spell";
      break;
    case "equip":
      spellType = "Equip Spell";
      break;
    case "continuous":
      spellType = "Continuous Spell";
      break;
    case "ritual":
      spellType = "Ritual Spell";
      break;
    default:
      spellType = "Normal Spell";
  }

  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <Image
          className="block mr-1"
          src={`https://duelistmarketimages.s3.amazonaws.com/attributes/${props.card.spellType}.webp`}
          alt={`Level`}
          width={30}
          height={30}
        />
      </div>
      <div className="font-bold text-xl font-mono">
        {props.card.spellType[0].toUpperCase() + props.card.spellType.slice(1)}{" "}
        {spellType}
      </div>
    </div>
  );
}
