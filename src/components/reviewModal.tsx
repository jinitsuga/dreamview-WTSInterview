import { useEffect, useRef, useState, Dispatch, SetStateAction } from "react";
import {
  SelectInput,
  TextInput,
  TextAreaInput,
} from "./movieListings/modalInputs";

type Review = {
  showModal: boolean;
  closeModal: Dispatch<SetStateAction<boolean>>;
  movieTitle: string;
};

export type ReviewFormData = {
  movie: string;
  name: string;
  email: string;
  review: string;
};

const validateForm = (form: ReviewFormData) => {
  const { name, email, review } = form;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 4) return "Tu nombre debe incluir mas de 4 caracteres";
  if (!emailRegex.test(email)) return "Ingresa un email valido";
  if (review.length < 10) return "Tu reseña debe llevar mas de 10 caracteres";
  return "ok";
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
  const [validationError, setValidationError] = useState<string>(""); // Display validation errors to the user

  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    setFormData({ ...formData, movie: movieTitle });
  }, [movieTitle]);

  useEffect(() => {
    if (showModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [showModal]);

  console.log(formData);

  const resetForm = () => {
    setFormData({ movie: "", name: "", email: "", review: "" });
  };

  // Ideally, server side validation also happens, since client-side val can be altered

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
          value={formData.name}
          placeholder="Carlos Perez"
          label="name"
          labelText="Nombre completo"
          onChange={setFormData}
          formData={formData}
        />
        <TextInput
          value={formData.email}
          placeholder="juan.rodriguez@ejemplo.com"
          label="email"
          labelText="E-mail"
          onChange={setFormData}
          formData={formData}
        />
        <TextAreaInput
          value={formData.review}
          placeholder="Escribe tu opinión"
          label="review"
          labelText="Reseña"
          onChange={setFormData}
          formData={formData}
        />
        {validationError !== "" && (
          <p className="text-red-600 text-sm">{validationError}</p>
        )}
        <div className="flex gap-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              const message = validateForm(formData);
              if (message !== "ok") {
                setValidationError(message);
              } else {
                console.log("todo en orden");
              }
            }}
            className="text-semibold text-xl p-4 border-2 border-dreamview rounded px-20"
          >
            Finalizar
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              resetForm();
            }}
            className="text-[#A9A9A9]"
          >
            Reiniciar
          </button>
        </div>
      </form>
    </dialog>
  );
}
