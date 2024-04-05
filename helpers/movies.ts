export async function getMovies() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const key = import.meta.env.VITE_MOVIES_API_KEY;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${key}`,
      { method: "GET", headers: myHeaders }
    );
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}
