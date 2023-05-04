import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../redux/MovieSlice";
import MovieCard from "./MovieCard";

const MoviePage = () => {
  let movies = [];
  movies = useSelector(getAllMovies);
  return (
    <div className="pt-[120px] pb-20 reduce_padding w-[100%] page_gradient justify-center items-center m-auto">
      <div className="flex flex-wrap w-[90%] gap-6 text-white justify-center m-auto items-center">
        {movies.length>0 && movies.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MoviePage;
