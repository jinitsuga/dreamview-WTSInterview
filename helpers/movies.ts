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

// Used it to edit some path strings (no longer being used)
// export function getImagePath(path: string) {
//   return `${imgsUrl}${path}`.replace("'", "");
// }
