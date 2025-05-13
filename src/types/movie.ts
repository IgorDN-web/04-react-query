export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  poster_path: string | null;
}

export interface MoviesResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}
