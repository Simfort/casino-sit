import Image from "next/image";
import sundux from "../../public/pngwing.com (5).png";
import boat from "../../public/pngwing.com (6).png";
import gelic from "../../public/pngwing.com (8).png";

export default function YourChange() {
  return (
    <section className="mt-[100px] ">
      {" "}
      <h2 className="font-black">
        <span className="bg-[linear-gradient(to_bottom,#3b5c7b4d,#009fa5)] bg-clip-text shadow-none text-transparent">
          Golden Empire -
        </span>{" "}
        Ваш выбор для побед
      </h2>
      <ol className="flex gap-10 justify-center flex-wrap">
        <div className="flex items-center border-[#547e6a] justify-center border-2 bg-[rgba(0,0,0,0.49)] p-5 rounded-2xl flex-col gap-2 max-sm:w-[300px] w-[400px] text-center">
          <Image
            alt=""
            src={sundux}
            className="w-[250px] max-md:w-[200px] max-md:h-[200px]  h-[250px]"
          />
          <h4 className="font-black bg-[linear-gradient(to_bottom,#64ffb44d,#6dfaff)] bg-clip-text shadow-none text-transparent">
            Кэшбэк до 20%
          </h4>
          <p>
            Начните с 3% и достигните 20% кэшбэка, получая максимум удовольствия
            от игры!
          </p>
        </div>
        <div className="flex border-[#547e6a] items-center justify-center border-2 bg-[rgba(0,0,0,0.49)] p-5 rounded-2xl flex-col gap-2 w-[400px] max-sm:w-[300px] text-center">
          {" "}
          <Image
            alt=""
            src={boat}
            className="w-[300px] max-md:w-[200px] max-md:h-[200px] h-[250px]"
          />
          <h4 className="font-black  bg-[linear-gradient(to_bottom,#547e6a4d,#beeff0)] bg-clip-text shadow-none text-transparent">
            Сверхзвуковые выводы
          </h4>
          <p>
            Испытайте молниеносные выплаты и наслаждайтесь игрой без задержек!
          </p>
        </div>{" "}
        <div className="flex border-[#547e6a] items-center justify-center border-2 bg-[rgba(0,0,0,0.49)] p-5 rounded-2xl flex-col gap-2 w-[400px] max-sm:w-[300px] text-center">
          {" "}
          <Image
            alt=""
            src={gelic}
            className="w-[500px] max-md:w-[200px] max-md:h-[200px] h-[250px]"
          />
          <h4 className="font-black  bg-[linear-gradient(to_bottom,#4cffa84d,#75fdff)] bg-clip-text shadow-none text-transparent">
            Гелендваген в подарок
          </h4>
          <p>
            Ощутите роскошь: выиграйте Mercedes Benz G-Class на высших уровнях!
          </p>
        </div>
      </ol>
    </section>
  );
}
