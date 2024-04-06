import Navbar from "./components/navbar";
import Carousel from "./components/carousel/carousel";
import Listings from "./components/movieListings/listings";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../helpers/movies";
import "./App.css";
import { Movie } from "./types/types";

function App() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  const topMovies =
    data && data.movies.filter((movie: Movie) => movie.featured == true);

  return (
    <main className="min-w-screen min-h-screen flex flex-col ">
      <Navbar />
      {isPending && (
        <div className="text-3xl text-white flex self-center ">
          <p>Loading...</p>
        </div>
      )}
      {isError && (
        <div>
          <p>
            There was an error fetching information about the movies :( \n $
            {error.message}
          </p>
        </div>
      )}
      {data && (
        <>
          <Carousel topMovies={topMovies} />
          <Listings movies={data.movies} />
        </>
      )}
    </main>
  );
}

export default App;
