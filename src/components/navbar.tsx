import ReviewModal from "./reviewModal";
import logo from "/dreamview-logo.png";
import starIcon from "/starfilled.png";
import { useState } from "react";
export default function Navbar() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <header className="h-[60px] sticky backdrop-blur-[8px] backdrop-saturate-[1.8] top-0  z-20 w-full p-8 px-12 flex items-center justify-between bg-[#1C1C1C] bg-opacity-50">
      <a href="#carousel">
        <img
          src={logo}
          alt="Dreamview logo"
          className="h-[46px] w-[76px]"
        ></img>
      </a>
      <nav className="flex items-center">
        <ul className=" gap-4 items-center text-[18px] text-white hidden lg:flex">
          <li>
            <button className="text-white hover:text-dreamview">
              <a href="#carousel ">Destacadas</a>
            </button>
          </li>
          <li>
            <button className="text-white hover:text-dreamview">
              <a href="#listing">Cartelera</a>
            </button>
          </li>
          <li>
            <button className="py-2 bg-[#554F95] rounded w-[185px] hover:scale-110 hover:text-black">
              Comprar ticket
            </button>
          </li>
        </ul>
        <button
          className="flex lg:hidden gap-2 flex-col text-lg items-center justify-center"
          onClick={(e) => {
            e.preventDefault();
            setShowModal(true);
          }}
        >
          <div className="h-[50px] flex items-center justify-center w-[55px] rounded bg-dreamview">
            <img src={starIcon} width={35} height={35} alt="star icon" />
          </div>
        </button>
        {showModal && (
          <ReviewModal
            movieTitle={""}
            showModal={showModal}
            closeModal={setShowModal}
          />
        )}
      </nav>
    </header>
  );
}
