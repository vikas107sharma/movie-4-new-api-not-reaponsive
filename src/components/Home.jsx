import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieListing from "./MoviesList/MoviesListing";
import Header from "./Header";
import Form from "./Form";
import TopCarousel from "./MoviesList/TopCarousel";

const Home = () => {
  return (
    <>
    <div>
    <TopCarousel/>
      <div className="bg-black">
        <div className="m-auto w-[85%] md:w-[90%] lg:w-[95%] bg-zinc-900 rounded-2xl flex-col flex">
          <div className="text-white mt-10">
            <div className="flex justify-between items-center m-4">
              <h1 className="inline-block text-3xl font-bold">Popular</h1>
              <Link to="/movies">view all</Link>
            </div>
            <MovieListing ListName={"movies"} />
          </div>
          <div className="text-white">
            <div className="flex justify-between items-center m-4">
              <h1 className="inline-block text-3xl font-bold">Upcoming</h1>
              <Link to="/upcoming">view all</Link>
            </div>
            <MovieListing ListName={"upcoming"} />
          </div>
          <div className="text-white">
            <div className="flex justify-between items-center m-4">
              <h1 className="inline-block text-3xl font-bold">Top Rated</h1>
              <Link to="/toprated">view all</Link>
            </div>
            <MovieListing ListName={"toprated"} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
