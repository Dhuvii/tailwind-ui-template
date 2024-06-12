"use client";
import Image from "next/image";
import { ComponentProps } from "react";

interface IKanbanCard extends ComponentProps<"div"> {
  name: string;
  date: string;
  image: string;
  match: number;
}

const KandbanCard = ({ className, name, image, date, match }: IKanbanCard) => {
  return (
    <div className="flex-shrink-0 rounded-lg bg-white p-4 shadow ring-[1px] ring-gray-950/5">
      <div className="flex items-start justify-between gap-5 truncate">
        <div className="">
          <p className="truncate text-sm/6 font-medium text-gray-950">{name}</p>
          <p className="text-sm/6 text-gray-600">{date}</p>
        </div>
        <div className="relative size-9 flex-shrink-0 overflow-hidden rounded-full">
          <Image
            fill
            className="w-full object-cover"
            src={image}
            alt={`Image of ${name}`}
          />
        </div>
      </div>

      <span
        className={`mt-2 block w-max rounded-md px-2 text-xs/6 font-medium ${match >= 80 ? "bg-green-100 text-green-800" : match > 40 ? "bg-yellow-100 text-yellow-800" : "bg-rose-100 text-rose-800"} `}
      >
        {match}% match
      </span>
    </div>
  );
};

export default KandbanCard;
