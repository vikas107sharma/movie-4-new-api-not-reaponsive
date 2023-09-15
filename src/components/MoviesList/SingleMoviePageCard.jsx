import React, { useEffect } from "react";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import { useState } from "react";
import axios from "axios";
import VideoPopup from "../videoPopup/VideoPopup";

const SingleMoviePageCard = ({ movie }) => {
  const backdrop = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
  const poster = "https://image.tmdb.org/t/p/original" + movie.poster_path;

  const [show,setShow] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [vi, setVi] = useState("");

  const id = movie.id;
  const year =movie.release_date.split('-')[0]

  useEffect(()=>{
    const fetchVideo = async()=>{
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=cf3cfe4d6a99a54a38b0026fde575ce7&language=en-US`)
      console.log(res.data.results[0].key);
      setVi(res.data.results[0].key);
    }
    fetchVideo();
  },[videoId])

  return (
    <div className="relative">

      <div
        style={{
          overflow: "hidden",
          position: "fixed",
          width: "100vw", 
          zIndex: "-1",
          height: "100vh",
        }}
      >
        <img className="movie_img" src={backdrop} alt="" />
      </div>

      <div
        className={`flex flex-wrap movie_gradient pt-[120px] pb-20 justify-center items-center text-white`}
      >
        <div className=" flex lg:w-[40%] md:w-[50%] sm:w-[100%] justify-center items-center">
          <img
            src={poster}
            alt={movie.title}
            className="w-[300px] max-w-[90%] rounded-2xl"
          />
        </div>

        <div className=" flex lg:w-[40%] md:w-[50%] sm:w-[100%] justify-center pt-5 items-center">
          <div className="w-[70%] justify-center items-center">
            <h1 className="text-3xl">
              {movie.title}{" "}
              <span className="text-sm">({year})</span>
            </h1>
            <div className="flex mt-5 flex-wrap">
              {movie.genres.map((g) => {
                return (
                  <span className="p-1 pl-2 pr-2 mr-2 mt-2 rounded-full border-2 ">
                    {g.name}
                  </span>
                );
              })}
            </div>

            <div className="flex mt-5 flex-wrap">
              <h3 className="mr-3">Language : </h3>
              {movie.spoken_languages.map((l) => {
                return <span className="mr-1">{l.english_name},</span>;
              })}
            </div>
            <div className="mt-5">
              <h3>Description </h3>
              <p>{movie.overview}</p>
            </div>

            <div className="flex gap-2 cursor-pointer items-center" onClick={()=>{
              setShow(true);
              setVideoId(vi);
              console.log("playing")
            }}>
              <PlayCircleFilledWhiteRoundedIcon
                style={{
                  fontSize: 60,
                  color: "rgb(180, 18, 18)",
                  marginTop: "15px",
                }}
              />
              <span className="pt-4 text-xl  font-bold">Play</span>
            </div>
          </div>
        </div>
      </div>


      <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />


    </div>
  );
};

export default SingleMoviePageCard;
