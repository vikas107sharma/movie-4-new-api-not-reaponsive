import React from "react";
import {
  getAllMovies,
  getAllUpcoming,
  getAllTopRated,
  getAllSimilar,
} from "../redux/MovieSlice";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Axios } from "axios";

const MoviesListing = ({ ListName }) => {
  let movies = [];
  movies = useSelector(getAllMovies);
  let upcoming = [];
  upcoming = useSelector(getAllUpcoming);
  let toprated = [];
  toprated = useSelector(getAllTopRated);
  let similar = [];
  similar = useSelector(getAllSimilar);

  let renderMovies = "";
  let renderUpcoming = "";
  let renderTopRated = "";
  let renderSimilar = "";


  renderMovies =
    movies.length > 0 &&
    movies?.map((movie, index) => {
      return <MovieCard key={index} movie={movie} />;
    });

  renderUpcoming =
    upcoming.length > 0 &&
    upcoming.map((movie, index) => {
      return <MovieCard key={index} movie={movie} />;
    });

  renderTopRated =
    toprated.length > 0 &&
    toprated.map((movie, index) => {
      return <MovieCard key={index} movie={movie} />;
    });

  renderSimilar =
    similar.length > 0 &&
    similar.map((movie, index) => {
      return <MovieCard key={index} movie={movie} />;
    });

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
    ],
  };
  return (
    <>
      <div className="">
        {ListName === "movies" && (
          <div className="">
            <Slider {...settings}>{renderMovies}</Slider>
          </div>
        )}
        {ListName === "upcoming" && (
          <div className="">
            <Slider {...settings}>{renderUpcoming}</Slider>
          </div>
        )}
        {ListName === "toprated" && (
          <div className="">
            <Slider {...settings}>{renderTopRated}</Slider>
          </div>
        )}
        {ListName === "similar" && (
          <div className="">
            <Slider {...settings}>{renderSimilar}</Slider>
          </div>
        )}
      </div>
    </>
  );
};

export default MoviesListing;
