import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import "./App.css";
import MoviePage from "./components/MoviesList/MoviePage";
import Upcoming from "./components/MoviesList/Upcoming";
import SingleMoviepage from "./components/MoviesList/SingleMoviepage";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies, fetchAsyncUpcoming, fetchAsyncTopRated, fetchAsyncNowPlaying } from "./components/redux/MovieSlice";
import TopRated from "./components/MoviesList/TopRated";
import Similar from "./components/MoviesList/Similar";
import SearchPage from "./pages/searchPage/SearchPage";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncUpcoming());
    dispatch(fetchAsyncTopRated());
    dispatch(fetchAsyncNowPlaying());
  }, [dispatch]);

  return (
    <div className="flex w-[100%] min-h-full flex-col">
      <div className="w-[100%] m-auto">
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/movies" exact element={<MoviePage />} />
          <Route path="/upcoming" exact element={<Upcoming />} />
          <Route path="/toprated" exact element={<TopRated />} />
          <Route path="/similar" exact element={<Similar />} />
          <Route path="/search/:query" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/movie/:id" element={<SingleMoviepage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
