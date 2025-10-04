"use client";
import GAMES from "@/lib/games";
import { Popcorn } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Game from "./Game";

export default function PopularyGames() {
  return (
    <section className="w-1/1">
      <section>
        <div className="flex gap-5">
          <h3 className=" flex gap-2 items-center font-black">
            <Popcorn />
            ПОПУЛЯРНЫЕ
          </h3>
          <button className="hover:text-white font-bold text-[#65fffc] transition-colors duration-150 ">
            Посмотреть все
          </button>
        </div>
      </section>
      <ul className="grid gap-5 grid-cols-[repeat(6,200px)]">
        {GAMES.map((val, i) => (
          <Game val={val} key={i} />
        ))}
      </ul>
    </section>
  );
}
