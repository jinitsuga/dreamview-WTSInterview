type CardProps = {
  title: string;
  posterUrl: string;
};

export default function MovieCard({ title, posterUrl }: CardProps) {
  return (
    <div className="flex flex-col items-center justify-center w-[205px] ">
      <h3 className="max-w-[250px] h-[45px] text-center inline text-[15px] text-white font-light">
        {title}
      </h3>
      <img className="w-[160px] rounded" src={posterUrl}></img>
      <button>Comprar ticket</button>
    </div>
  );
}
