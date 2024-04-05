import { useState } from "react";
import { Movie } from "../../types/types";
import Slide from "./slide";

type CarouselProps = {
  topMovies: Movie[];
};

export default function Carousel({ topMovies }: CarouselProps) {
  const [shownSlide, setShownSlide] = useState<number>(1);

  const imgsUrl = import.meta.env.VITE_IMG_URL;

  const slides = topMovies.map((movie, id) => (
    <Slide
      key={id}
      title={movie.title}
      description={movie.overview}
      backgroundUrl={`${imgsUrl}${movie.backdrop_path}`}
      posterUrl={`${imgsUrl}${movie.poster_path}`}
    />
  ));
  return <section>{slides[shownSlide]}</section>;
}
