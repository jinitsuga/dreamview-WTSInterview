import { useState } from "react";
import { Movie } from "../../types/types";
import Slide from "./slide";

type CarouselProps = {
  topMovies: Movie[];
};

export default function Carousel({ topMovies }: CarouselProps) {
  const [shownSlide, setShownSlide] = useState<number>(0);

  const slides = topMovies.map((movie, id) => (
    <Slide
      currentSlide={shownSlide}
      setSlide={setShownSlide}
      slideQty={topMovies.length}
      key={id}
      title={movie.title}
      description={movie.description}
      backgroundUrl={movie.poster}
      posterUrl={movie.poster}
      score={movie.rating}
    />
  ));
  return <section>{slides[shownSlide]}</section>;
}
