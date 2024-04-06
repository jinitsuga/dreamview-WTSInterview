import { Movie } from "../../types/types";
import MovieCard from "./movieCard";

export default function Listings({ movies }: { movies: Movie[] }) {
  const movieCards = movies.map((movie, id) => (
    <MovieCard key={id} title={movie.title} posterUrl={movie.poster} />
  ));

  return (
    <section className=" flex flex-col py-8 xl:px-8 max-w-[1250px] items-center self-center gap-4 justify-center ">
      <h2
        id="listing"
        className="text-white text-4xl mb-4 text-center self-start "
      >
        En cartelera
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3   lg:grid-cols-5 xl:gap-x-4 gap-x-1 gap-y-10 items-center justify-center">
        {movieCards}
      </div>
    </section>
  );
}
