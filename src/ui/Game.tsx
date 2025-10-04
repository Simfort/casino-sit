"use client";
import { Game as GameT } from "@/lib/games";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Pause, Play } from "lucide-react";

export default function Game({ val }: { val: GameT }) {
  const [isMouseGame, setIsMouseGame] = useState(false);
  return (
    <li
      onMouseMove={() => setIsMouseGame(true)}
      onMouseLeave={() => setIsMouseGame(false)}
      className="hover:border-[rgb(78,103,161)] border-2  border-[rgba(0,0,0,0)] transition-colors duration-140 rounded-2xl cursor-pointer relative justify-between  bg-[rgba(0,0,0,0.64)] flex flex-col  ">
      <Image
        className="rounded-2xl w-1/1 "
        height={100}
        width={100}
        src={val.image}
        alt="game image"
      />
      <AnimatePresence>
        {isMouseGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute flex items-center justify-center  h-1/1 w-1/1 hover:bg-[rgba(0,0,0,0.22)] rounded-2xl transition-colors duration-140">
            <Play size={50} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="p-2">
        {" "}
        <p>{val.title}</p>
        <p className="opacity-50">{val.author ? val.author : "Unknown"}</p>
      </div>
    </li>
  );
}
