import { Movie } from "../../types/types";
import { Dispatch, SetStateAction } from "react";
import { ReviewFormData } from "../reviewModal";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../../helpers/movies";

type Inputs = {
  label: string;
  labelText: string;
  value?: string;
  onChange: Dispatch<SetStateAction<ReviewFormData>>;
  formData: ReviewFormData;
  placeholder?: string;
};

export function SelectInput({
  label,
  labelText,
  value,
  onChange,
  formData,
}: Inputs) {
  const { data, isPending, error } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  if (error) {
    return <p>Hubo un error al cargar las películas.</p>;
  }

  if (isPending) {
    return <p>Cargando pelis...</p>;
  }

  const movieList =
    data &&
    data.movies.map((movie: Movie, id: number) => (
      <option className="max-w-[235px] p-2" key={id} value={movie.title}>
        {movie.title}
      </option>
    ));

  return (
    <label className="bg-[#282828]" htmlFor={label}>
      <div className="flex relative flex-col items-start justify-center p-2 border-2 w-[375px] border-dreamview rounded">
        <p className="text-sm relative bottom-5 bg-[#282828] pr-6 pl-2">
          {labelText}
        </p>
        <div>
          <select
            className="text-white p-2 text-bold text-lg bg-[#282828] w-full hover:cursor-pointer"
            onChange={(e) => onChange({ ...formData, [label]: e.target.value })}
            value={value}
            id={label}
          >
            {movieList}
          </select>
        </div>
      </div>
    </label>
  );
}

export function TextInput({
  label,
  labelText,
  onChange,
  formData,
  placeholder,
}: Inputs) {
  return (
    <label className="bg-[#282828]" htmlFor={label}>
      <div className="flex relative flex-col items-start justify-center p-2 border-2 w-[375px] border-dreamview rounded">
        <p className="text-sm relative bottom-5 bg-[#282828] pr-6 pl-2">
          {labelText}
        </p>
        <div>
          <input
            placeholder={placeholder}
            className="text-white p-2 text-bold text-lg bg-[#282828] w-full"
            id={label}
            type="text"
            onChange={(e) => onChange({ ...formData, [label]: e.target.value })}
          />
        </div>
      </div>
    </label>
  );
}
export function TextAreaInput({
  label,
  labelText,
  onChange,
  formData,
  placeholder,
}: Inputs) {
  return (
    <label className="bg-[#282828]" htmlFor={label}>
      <div className="flex relative flex-col items-start justify-center p-2 border-2 w-[375px] border-dreamview rounded">
        <p className="text-sm relative bottom-5 bg-[#282828] pr-6 pl-2">
          {labelText}
        </p>
        <div>
          <textarea
            placeholder={placeholder}
            className="text-white p-2 text-bold text-lg bg-[#282828] w-full"
            id={label}
            maxLength={300}
            minLength={10}
            onChange={(e) => onChange({ ...formData, [label]: e.target.value })}
          />
        </div>
      </div>
    </label>
  );
}
