import logo from "../../public/dreamview-logo.png";

export default function Navbar() {
  return (
    <header className="h-[60px] sticky top-0  z-20 w-full p-8 px-12 flex items-center justify-between bg-[#1C1C1C] bg-opacity-50">
      <img src={logo} alt="Dreamview logo" className="h-[46px] w-[76px]"></img>
      <nav>
        <ul className="flex gap-4 items-center text-[18px] text-white">
          <li>
            <button className="text-white">Destacadas</button>
          </li>
          <li>
            <button className="text-white">Cartelera</button>
          </li>
          <li>
            <button className="py-2 bg-[#554F95] rounded w-[185px]">
              Comprar ticket
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
