export default function Header() {
  return (
    <header className="fixed max-sm:flex-col gap-5 z-10  w-1/1 p-5 flex items-center justify-around bg-[linear-gradient(to_bottom,#1b373c,#009fa5)]">
      <h2 className="font-black  ">Golden Empire</h2>
      <nav className="flex gap-10">
        <button className="border-2 border-[#5ffffc] transition-colors duration-150 hover:bg-[rgba(0,0,0,0.2)] rounded-full p-2 min-w-[100px] w-[150px]">
          Вход
        </button>
        <button className=" rounded-full transition-shadow duration-150 hover:shadow-[0_0_20px_#479190] p-2 pr-5 pl-5 w-[150px] bg-[linear-gradient(to_right,#5efffc,#4a9f73)]">
          Регистрация
        </button>
      </nav>
    </header>
  );
}
