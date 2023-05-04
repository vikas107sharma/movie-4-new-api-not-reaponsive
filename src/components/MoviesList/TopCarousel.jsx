import React from "react";
import { getAllNowPlaying } from "../redux/MovieSlice";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Axios } from "axios";
import "./stylesMedia.css";
import StarIcon from '@mui/icons-material/Star';

const TopCarousel = () => {
  const movies = useSelector(getAllNowPlaying);
  // console.log("movies", movies);
  
  let renderMovies = "";
  
  renderMovies =
  movies.length>0 && (
    movies.map((movie, index) => {
        const backdrop = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
        return (
          <>
            <div className="w-full flex items-center justify-center top_carousel relative movie_gradient h-[75vh]">
              <div
                style={{
                  position: "absolute",
                  width: "100vw",
                  zIndex: "-1",
                  height: "100vh",
                  top: "-140px",
                }}
              >
                <img
                  className="movie_img "
                  src={backdrop}
                  alt={movie.Title}
                />
              </div>
              <div className="flex flex-col w-[90%]">
                <p className="text-white text-4xl font-bold">{movie.title}</p>
                <p className="text-white w-[60%] pt-4">{movie.overview}</p>
                <p className="text-white pt-4">Rating: {movie.vote_average} <StarIcon style={{color:"yellow"}}/></p>
              </div>
            </div>
          </>
        );
      })
    );

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <>
      <div className="gradient">
        <Slider {...settings}>{renderMovies}</Slider>
      </div>
    </>
  );
};

export default TopCarousel;
