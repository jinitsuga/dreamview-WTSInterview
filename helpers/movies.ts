const imgsUrl = import.meta.env.VITE_IMG_URL;

export async function getMovies() {
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/wtuydev/test-json/main/films.json`
    );
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

export function getImagePath(path: string) {
  return `${imgsUrl}${path}`.replace("'", "");
}
