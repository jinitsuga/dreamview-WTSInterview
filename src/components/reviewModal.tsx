import { useEffect, useRef, useState, Dispatch, SetStateAction } from "react";
import {
  SelectInput,
  TextInput,
  TextAreaInput,
} from "./movieListings/modalInputs";
import { Movie } from "../types/types";

type Review = {
  showModal: boolean;
  closeModal: Dispatch<SetStateAction<boolean>>;
  movieTitle: string;
  movies: Movie[];
};

export type ReviewFormData = {
  movie: string;
  name: string;
  email: string;
  review: string;
};

export default function ReviewModal({
  showModal,
  closeModal,
  movieTitle,
}: Review) {
  const [formData, setFormData] = useState<ReviewFormData>({
    movie: "",
    name: "",
    email: "",
    review: "",
  });
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    setFormData({ ...formData, movie: movieTitle });
  }, []);

  useEffect(() => {
    if (showModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [showModal]);
  console.log(formData);
  return (
    <dialog
      className="p-4 bg-[#282828] xl:w-1/2 w-full h-full backdrop:bg-slate-900/70 rounded text-white "
      onCancel={() => closeModal(false)}
      ref={ref}
    >
      <h2 className="ml-8 font-semibold text-[32px]">Reseña de películas</h2>
      <p className="ml-8 mb-8">Deja tu opinión</p>

      <form className=" flex flex-col gap-4 items-center justify-center">
        <SelectInput
          label="movie"
          labelText="Seleccione película"
          onChange={setFormData}
          formData={formData}
          value={formData.movie}
        />
        <TextInput
          placeholder="Carlos Perez"
          label="name"
          labelText="Nombre completo"
          onChange={setFormData}
          formData={formData}
        />
        <TextInput
          placeholder="juan.rodriguez@ejemplo.com"
          label="email"
          labelText="E-mail"
          onChange={setFormData}
          formData={formData}
        />
        <TextAreaInput
          placeholder="Escribe tu opinión"
          label="review"
          labelText="Reseña"
          onChange={setFormData}
          formData={formData}
        />
      </form>
    </dialog>
  );
}
