import React from "react";
import { useSelector } from "react-redux";
import { fetchAsyncUpcoming,getAllUpcoming } from "../redux/MovieSlice";
import MovieCard from "./MovieCard";

const Upcoming = () => {
  let upcoming = [];
  upcoming = useSelector(getAllUpcoming);
  return (
    <div className="pt-[120px] pb-20 justify-center w-[100%] items-center page_gradient ">
      <div className="flex flex-wrap w-[90%] gap-6 m-auto text-white justify-center items-center">
        {upcoming.length>0 && upcoming.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Upcoming;
