import { Movie } from "../../types/types";
import MovieCard from "./movieCard";

export default function Listings({ movies }: { movies: Movie[] }) {
  const movieCards = movies.map((movie, id) => (
    <MovieCard key={id} title={movie.title} posterUrl={movie.poster} />
  ));

  return (
    <section className=" flex flex-col  px-8 max-w-[1250px] items-center self-center gap-4 justify-center ">
      <h2 className="text-white text-4xl text-center self-start ">
        En cartelera
      </h2>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {movieCards}
      </div>
    </section>
  );
}
