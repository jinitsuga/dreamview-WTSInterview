import { useEffect, useRef, useState, Dispatch, SetStateAction } from "react";
import {
  SelectInput,
  TextInput,
  TextAreaInput,
} from "./movieListings/modalInputs";
import glowingStar from "/glowingStar.png";

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

// Ideally, server side validation also happens since client-side validation can be altered
const validateForm = (form: ReviewFormData) => {
  const { name, email, review, movie } = form;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (movie === "") return "Elige una pelicula";
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
  const [showThanks, setShowThanks] = useState<boolean>(false);

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
    setFormData({ name: "", email: "", review: "", movie: formData.movie });
  };

  return (
    <dialog
      className="xl:p-4 p-2 bg-[#282828] xl:w-1/2 w-full h-full backdrop:bg-slate-900/70 rounded text-white "
      onCancel={() => closeModal(false)}
      ref={ref}
    >
      {!showThanks ? (
        <>
          <div className="w-full flex justify-between items-center">
            <div>
              <h2 className="ml-8 font-semibold text-[32px]">
                Reseña de películas
              </h2>
              <p className="ml-8 mb-8">Deja tu opinión</p>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                closeModal(false);
              }}
              className="text-6xl self-start"
            >
              ✕
            </button>
          </div>

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
                    // open thank you box here
                    setShowThanks(true);
                  }
                }}
                className="text-semibold text-xl p-4 border-2 border-dreamview rounded px-20 hover:text-dreamview"
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
        </>
      ) : (
        <>
          <div className="w-full flex  items-start justify-end">
            <button
              onClick={(e) => {
                e.preventDefault();
                closeModal(false);
              }}
              className="text-6xl"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col gap-10  items-center justify-center">
            <p className="text-[22px] font-semibold text-[#8D8D8D]">
              Reseña de películas
            </p>
            <h2 className="text-[32px] text-center font-semibold">{`¡Muchas gracias ${
              formData.name.split(" ")[0]
            }!`}</h2>
            <img width={125} height={125} src={glowingStar} alt="star icon" />
            <p className="text-lg max-w-[375px] text-center font-semibold">{`Tu reseña sobre la película "${formData.movie}" ha sido enviada.`}</p>
          </div>
        </>
      )}
    </dialog>
  );
}
