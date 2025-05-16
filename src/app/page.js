"use client";

import { useState } from "react";
import MovieForm from "../components/MovieForm";
import MovieList from "../components/MovieList";
import SortButtons from "@/components/SortButtons";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [sortType, setSortType] = useState(null);

  const addMovie = (title, rating) => {
    const updated = [...movies, { title, rating }];
    setMovies(sortMovies(updated, sortType));
  };

  const deleteMovie = (title) => {
    setMovies(movies.filter((movie) => movie.title !== title));
  };

  const sortMovies = (movieArray, type) => {
    const sorted = [...movieArray];
    if (type === "title") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (type === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    return sorted;
  };

  const handleSort = (type) => {
    setSortType(type);
    setMovies(sortMovies(movies, type));
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Min filmlista</h1>
      <MovieForm onAddMovie={addMovie} />
      <hr className="my-4" />
      <SortButtons handleSort={handleSort} />
      <hr className="my-4" />
      <MovieList movies={movies} onDelete={deleteMovie} />
    </div>
  );
}
