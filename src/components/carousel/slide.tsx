type SlideTypes = {
  title: string;
  backgroundUrl?: string;
  description: string;
  posterUrl?: string;
};

export default function Slide({
  title,
  backgroundUrl,
  posterUrl,
  description,
}: SlideTypes) {
  const fixedPoster = posterUrl?.replace("'", "");
  return (
    <div
      style={{ backgroundImage: `url(${backgroundUrl})` }}
      className={`object-scale-down flex flex-col w-full h-[690px] bg-cover  max-h-[700px]`}
    >
      <div className="w-full flex flex-col  items-center justify-center h-full backdrop-blur-[8px] backdrop-saturate-[1.8]">
        <div className="flex flex-row">
          <button className="text-white self-center font-semibold h-[60px] w-[60px] text-[65px]">
            {"<"}
          </button>

          <div className="h-[530px] w-[299px] object-cover ml-20 z-20">
            <img className="rounded" src={fixedPoster}></img>
          </div>
          <div className="flex items-center justify-start flex-col">
            <div className="-left-[90px] top-4 relative bg-[#D9D9D9] p-4 mb-10 rounded border-[6px] border-[#554F95] h-[340px] bg-opacity-[60%] mx-20">
              <h2 className="h-lg text-[#181818] leading-[60px] text-[69px] max-w-[700px] tracking-tighter">
                {title}
              </h2>
              <hr className="text-black border-[1px] border-black my-4 w-[550px]" />
              <p className="max-w-[750px] text-lg text-[#3A3A3A]">
                {description}
              </p>
            </div>
            <ul className="text-white -left-[90px] items-center justify-center  relative flex gap-4">
              <li className="flex items-center justify-center ">
                <a
                  className="flex gap-2 flex-col text-lg items-center justify-center"
                  href=""
                >
                  <div className="h-[50px] w-[50px] bg-dreamview"></div>
                  <span>Ver trailer</span>
                </a>
              </li>
              <li className="flex items-center justify-center ">
                {" "}
                <a
                  className="flex gap-2 flex-col text-lg items-center justify-center"
                  href=""
                >
                  <div className="h-[50px] w-[50px] bg-dreamview"></div>
                  <span>Dejar reseña</span>
                </a>
              </li>
            </ul>
          </div>
          <button className="text-white h-[60px] w-[60px] self-center font-semibold text-[65px]">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}