"use client";
import SLIDES from "@/lib/slides";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SliderGame() {
  const [currSlide, setCurrSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrSlide((prev) => {
        if (prev === 2) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <section className="w-1/1">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ backgroundImage: `url(${SLIDES[currSlide].src})` }}
          key={currSlide}
          className="min-h-[450px] p-5 w-1/1  rounded-2xl  bg-cover bg-[center] bg-no-repeat ">
          <h2 className="font-black">{SLIDES[currSlide].title}</h2>
          <h5>{SLIDES[currSlide].desc}</h5>
        </motion.div>
      </AnimatePresence>
      <ol className="flex gap-2 justify-center mt-[20px]  w-1/1">
        {new Array(3).fill(null).map((_, i) => (
          <li
            onClick={() => setCurrSlide(i)}
            style={currSlide == i ? { backgroundColor: "white" } : {}}
            key={i}
            className="h-[20px] w-[20px] border-2 transition-colors duration-300 rounded-full"></li>
        ))}
      </ol>
    </section>
  );
}
