import React from "react";
import { useSelector } from "react-redux";
import { getAllTopRated } from "../redux/MovieSlice";
import MovieCard from "./MovieCard";

const TopRated = () => {
  let toprated = [];
  toprated = useSelector(getAllTopRated);
  return (
    <div className="pt-[120px] pb-20 reduce_padding w-[100%] page_gradient justify-center items-center m-auto">
      <div className="flex flex-wrap w-[90%] gap-6 text-white justify-center m-auto items-center">
        {toprated.length>0 && toprated.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default TopRated;
