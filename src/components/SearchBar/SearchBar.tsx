import React, { useState, useEffect } from "react";
import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { FaMoon, FaSun, FaFilm } from "react-icons/fa";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.dataset.theme = isDark ? "dark" : "light";
  }, [isDark]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const query = (formData.get("query") as string).trim();

    if (!query) {
      toast.error("Please enter a search query.");
      return;
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <FaFilm className={styles.logoIcon} />
          <span>Movie Explorer</span>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            placeholder="Search movies..."
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>

        <button
          className={styles.themeToggle}
          onClick={() => setIsDark((prev) => !prev)}
          title="Toggle theme"
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
}
