import Navbar from "./components/navbar";
import Carousel from "./components/carousel/carousel";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../helpers/movies";
import "./App.css";

function App() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  const topMovies = data && data.results.slice(0, 3);

  return (
    <main className="w-screen h-screen flex flex-col ">
      <Navbar />
      {isPending && (
        <div className="text-2xl flex self-center ">
          <p>Loading...</p>
        </div>
      )}
      {isError && (
        <div>
          <p>
            There was an error fetching information about our movies. \n $
            {error.message}
          </p>
        </div>
      )}
      {data && <Carousel topMovies={topMovies} />}
    </main>
  );
}

export default App;
