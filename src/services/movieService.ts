import axios from "axios";
import { Movie } from "../types/movie";

export interface MoviesResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
}

export const fetchMovies = async (
  query: string,
  page: number
): Promise<MoviesResponse> => {
  if (!query.trim()) {
    return {
      page: 1,
      total_pages: 0,
      total_results: 0,
      results: [],
    };
  }

  const response = await axios.get<MoviesResponse>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: { query, page },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    }
  );
  return response.data;
};
