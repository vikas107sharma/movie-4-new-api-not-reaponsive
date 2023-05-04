import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./stylesMedia.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import dayjs from "dayjs";

const MovieCard = ({ movie }) => {
  const poster = "https://image.tmdb.org/t/p/original" + movie.poster_path;
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="w-[250px] h-[440px] movie_card m-auto mt-3 mb-10 transition-all border-solid border-2 border-zinc-500 shadow-sm shadow-zinc-600 ease-out duration-300 hover:scale-105">
        <LazyLoadImage
          src={poster}
          className="w-[100%] h-[90%]"
          alt={movie.Title}
          effect='blur'
        />
        <div className="ml-3">
        <p className="movie_title">{movie.original_title}</p>
        {dayjs(movie.release_date).format("MMM D, YYYY")}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
