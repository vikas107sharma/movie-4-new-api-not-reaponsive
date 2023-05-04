import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SingleMoviePageCard from "./SingleMoviePageCard";
import { useDispatch, useSelector } from "react-redux";
import { getSingleMovie, removeSingleMovie } from "../redux/MovieSlice";
import { fetchSingleMovie, fetchAsyncSimilar } from "../redux/MovieSlice";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MovieListing from "./MoviesListing";

const SingleMoviepage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  let movie = "";
  movie = useSelector(getSingleMovie);

  useEffect(() => {
    dispatch(fetchSingleMovie(id));
    dispatch(fetchAsyncSimilar(id));
    return () => {
      dispatch(removeSingleMovie());
    };
  }, [dispatch, id]);

  return (
    <>
      {Object.keys(movie).length === 0 ? (
        <>
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className="flex flex-wrap gradient pt-[120px] pb-20 justify-center items-center text-white">
              <div className=" flex lg:w-[40%] md:w-[50%] sm:w-[100%] justify-center items-center">
                <Skeleton style={{ height: "400px", width: "300px" }} />
              </div>
              <div className=" flex lg:w-[40%] md:w-[50%] sm:w-[100%] justify-center pt-5 items-center">
                <div className="w-[70%] justify-center items-center">
                  <h1 className="text-3xl">
                    <Skeleton />
                    <span className="text-sm">
                      <Skeleton />
                    </span>
                  </h1>
                  <div className="flex mt-5 flex-wrap">
                    <Skeleton />
                  </div>
                  <div className="flex mt-5 flex-wrap">
                    <h3 className="mr-3">Language : </h3>
                    <Skeleton />
                  </div>
                  <div className="mt-5">
                    <h3>Description </h3>
                    <Skeleton />
                  </div>
                  <div className="mt-5">
                    <h3>Casts</h3>
                    <Skeleton />
                  </div>
                </div>
              </div>
            </div>
          </SkeletonTheme>
        </>
      ) : (
        <div>
          <SingleMoviePageCard movie={movie} />
        </div>
      )}

      <div className="w-full bg-zinc-900">
      <div className="text-white w-[95%] m-auto pt-5">
        <div className="flex justify-between items-center">
          <h1 className="inline-block text-3xl font-bold">Similar Movies</h1>
          <Link to="/similar">view all</Link>
        </div>
        <MovieListing ListName={"similar"} />
      </div>
      </div>
    </>
  );
};

export default SingleMoviepage;
