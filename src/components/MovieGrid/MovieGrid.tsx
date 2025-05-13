import React from "react";
import { Movie } from "../../types/movie";
import styles from "./MovieGrid.module.css";

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export default function MovieGrid({ movies, onSelect }: MovieGridProps): JSX.Element {
  return (
    <ul className={styles.grid}>
      {movies.map((movie) => (
        <li
          key={movie.id}
          onClick={() => onSelect(movie)}
          className={styles.card}
          role="button"
        >
          <img
         src={
           movie.poster_path
             ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
             : "https://placekitten.com/500/750" // Другой сервис заглушек
            }
            alt={movie.title}
            className={styles.image}
          />
          <h2 className={styles.title}>{movie.title}</h2>
        </li>
      ))}
    </ul>
  );
}
