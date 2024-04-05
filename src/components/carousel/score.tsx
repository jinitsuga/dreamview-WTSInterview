import filledStar from "../../../public/starfilled.png";

export default function Score({ score }: { score: number }) {
  const textScore = score.toString();

  return (
    <div className="h-[70px] absolute -top-6 -left-8 gap-0 text-white w-[66px] bg-dreamview flex flex-col items-center justify-center rounded">
      <img src={filledStar}></img>
      <p className="-mb-1">
        {textScore.length > 2 ? textScore.slice(0, 3) : textScore}
        <span className="text-sm font-light">/10</span>
      </p>
      <span className="text-sm font-semibold">IMDB</span>
    </div>
  );
}
