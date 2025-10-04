import Description from "@/ui/Description";
import Header from "@/ui/Header";
import PopularyGames from "@/ui/PopularyGames";
import SliderGame from "@/ui/SliderGame";
import YourChange from "@/ui/YourChange";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="pr-[200px]  pl-[200px] max-md:pl-[20px] max-md:pr-[20px] pt-[100px] max-md:pt-[150px] flex flex-col items-center">
        <SliderGame />
        <PopularyGames />
        <YourChange />
        <Description />
      </main>
      <footer className="bg-black h-[200px] w-1/1 mt-[100px]">
        <h4 className="opacity-50">Golden empire</h4>
      </footer>
    </div>
  );
}
