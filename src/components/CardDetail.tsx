import Card from "@/types/dto/Card";
import MonsterCard from "@/types/dto/MonsterCard";
import { faSwords, faShield } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

interface CardProps {
  card: Card;
}

export default function CardDetail(props: CardProps) {
  return (
    <div className="flex flex-col max-h-full overflow-hidden">
      <div className="w-full py-2 flex bg-yellow-300/50 px-2 justify-between">
        <h1 className="font-bold text-white block font-sans">
          {props.card.name}
        </h1>
        <Image
          className="block"
          src={`https://duelistmarketimages.s3.amazonaws.com/attributes/${props.card.attribute}.png`}
          alt={`${props.card.attribute} attribute`}
          width={25}
          height={25}
        />
      </div>
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
          <div className="flex justify-between">
            <div className="flex items-center">
              <Image
                className="block mr-1"
                src={`https://duelistmarketimages.s3.amazonaws.com/star.png`}
                alt={`Level`}
                width={20}
                height={20}
              />
              <div className="font-bold text-xl font-mono">
                {(props.card as MonsterCard).level || null}
              </div>
            </div>
            <Image
              src={`https://duelistmarketimages.s3.amazonaws.com/types/${
                (props.card as MonsterCard).monsterType
              }.webp`}
              alt={`${(props.card as MonsterCard).monsterType} type monster.`}
              width={40}
              height={40}
            />
          </div>
          <div className="flex justify-between">
            <FontAwesomeIcon icon={faSwords} width={25} height={25} />
            <div className="font-bold text-xl font-mono">
              {(props.card as MonsterCard).attack || null}
            </div>
          </div>
          <div className="flex justify-between">
            <FontAwesomeIcon icon={faShield} width={25} height={25} />
            <div className="font-bold text-xl font-mono">
              {(props.card as MonsterCard).defense || null}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-2 flex bg-yellow-300/50 px-2 justify-between">
        <h1 className="font-bold text-white block font-sans">
          [
          {(props.card as MonsterCard).subTypes
            .map((type) => type.charAt(0).toUpperCase() + type.slice(1))
            .join("/")}
          ]
        </h1>
      </div>
      <div className="overflow-y-scroll no-scroll-bar">
        <p className="text-white p-4 whitespace-pre-wrap font-sans">
          {props.card.description.replace(/\"\"/g, '"')}
        </p>
      </div>
    </div>
  );
}
