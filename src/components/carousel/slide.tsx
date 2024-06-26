import { SetStateAction, Dispatch, useState } from "react";
import Score from "./score";
import playIcon from "/play-logo.png";
import starIcon from "/starfilled.png";
import ReviewModal from "../reviewModal";

type SlideTypes = {
  title: string;
  backgroundUrl?: string;
  description: string;
  posterUrl?: string;
  score: number;
  currentSlide: number;
  setSlide: Dispatch<SetStateAction<number>>;
  slideQty: number;
};

export default function Slide({
  title,
  backgroundUrl,
  posterUrl,
  description,
  score,
  currentSlide,
  slideQty,
  setSlide,
}: SlideTypes) {
  const [showModal, setShowModal] = useState<boolean>(false); // controlls showing of modal to leave movie review

  // I would ideally refactor this component, it's quite messy.

  const isLastSlide = currentSlide === slideQty - 1;
  const isFirstSlide = currentSlide === 0;

  const moveSlideForward = () => {
    if (isLastSlide) return;
    setSlide(currentSlide + 1);
  };

  const moveSlideBack = () => {
    if (isFirstSlide) return;
    setSlide(currentSlide - 1);
  };

  return (
    <div
      style={{ backgroundImage: `url(${backgroundUrl})` }}
      className={`object-scale-down flex flex-col w-full h-[790px] bg-cover`}
    >
      <div className="w-full flex xl:flex-col  items-center justify-center min-h-full backdrop-blur-[8px] backdrop-saturate-[1.8]">
        <button
          onClick={() => {
            moveSlideBack();
          }}
          className={`${
            isFirstSlide ? "invisible" : "block"
          } text-white self-center font-semibold xl:hidden  text-[85px]`}
        >
          {"<"}
        </button>
        <div className="flex lg:mx-20 mx-2 xl:mx-0 flex-col xl:flex-row  xl:max-w-[1250px]">
          <button
            onClick={() => {
              moveSlideBack();
            }}
            className={`${
              isFirstSlide ? "invisible" : "block"
            } text-white self-center font-semibold hidden xl:block  text-[85px]`}
          >
            {"<"}
          </button>

          <div className=" relative  object-cover xl:ml-20 z-20">
            <Score score={score} />
            <img
              className="rounded w-auto max-h-[530px] "
              src={posterUrl}
            ></img>
          </div>
          <div className="flex relative xl:-left-[85px] items-center justify-start flex-col">
            <div className="hidden xl:block top-4 relative bg-[#D9D9D9] p-4 mb-10 rounded border-[6px] border-[#554F95] h-[340px] bg-opacity-[60%] mx-20">
              <h2 className="h-lg text-[#181818] leading-[60px] text-[69px] max-w-[700px] tracking-tighter">
                {title}
              </h2>
              <hr className="text-black border-[1px] border-black my-4 w-[550px]" />
              <p className="max-w-[750px] text-lg text-[#3A3A3A]">
                {description}
              </p>
            </div>
            <h2 className="xl:hidden text-white text-[32px] min-h-[96px] max-w-[275px] tracking-tighter">
              {title}
            </h2>
            <ul className="text-white items-center justify-center  flex gap-4">
              <li className="flex items-center justify-center hover:text-dreamview">
                <a
                  className="flex gap-2 flex-col text-lg items-center justify-center"
                  href="https://www.youtube.com/watch?v=V-mugKDQDlg&t=1s&ab_channel=PrimeVideo"
                  target="_blank"
                >
                  <div className="h-[50px] flex items-center justify-center w-[50px] bg-dreamview ">
                    <img
                      src={playIcon}
                      height={35}
                      width={35}
                      alt="play icon"
                    />
                  </div>
                  <span className="drop-shadow-xl">Ver trailer</span>
                </a>
              </li>
              <li className="flex items-center justify-center hover:text-dreamview">
                {" "}
                <button
                  className="flex gap-2 flex-col text-lg items-center justify-center"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowModal(true);
                  }}
                >
                  <div className="h-[50px] rounded flex items-center justify-center w-[55px] bg-dreamview">
                    <img
                      src={starIcon}
                      width={35}
                      height={35}
                      alt="star icon"
                    />
                  </div>
                  <span className="drop-shadow-xl">Dejar reseña</span>
                </button>
              </li>
            </ul>
            {showModal && (
              <ReviewModal
                movieTitle={title}
                showModal={showModal}
                closeModal={setShowModal}
              />
            )}
          </div>
          <button
            onClick={() => {
              moveSlideForward();
            }}
            className={`${
              isLastSlide ? "invisible" : "block"
            } text-white self-center font-semibold hidden xl:block  text-[85px]`}
          >
            {">"}
          </button>
        </div>
        <button
          onClick={() => {
            moveSlideForward();
          }}
          className={`${
            isLastSlide ? "invisible" : "block"
          } text-white self-center font-semibold xl:hidden  text-[85px]`}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
