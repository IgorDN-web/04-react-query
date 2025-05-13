import axios from "axios";
import { Movie } from "../types/movie"; // імпортуй тип Movie

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/search/movie";


export interface MoviesResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}

export const fetchMovies = async (
  query: string,
  page = 1
): Promise<MoviesResponse> => {
  const response = await axios.get(BASE_URL, {
    params: {
      api_key: API_KEY,
      query,
      page,
    },
  });

  return response.data;
};
