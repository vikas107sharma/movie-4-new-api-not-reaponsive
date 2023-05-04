import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cf3cfe4d6a99a54a38b0026fde575ce7"
    );
    return response.data.results;
  }
);

export const fetchAsyncUpcoming = createAsyncThunk(
  "movies/fetchAsyncUpcoming",
  async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=cf3cfe4d6a99a54a38b0026fde575ce7&language=en-US&page=1"
    );
    return response.data.results;
  }
);

export const fetchAsyncTopRated = createAsyncThunk(
  "movies/fetchAsyncTopRated",
  async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=cf3cfe4d6a99a54a38b0026fde575ce7&language=en-US&page=1"
    );
    return response.data.results;
  }
);

export const fetchAsyncSimilar = createAsyncThunk(
  "movies/fetchAsyncSimilar",
  async (id) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=cf3cfe4d6a99a54a38b0026fde575ce7&language=en-US&page=1`
    );
    return response.data.results;
  }
);

export const fetchAsyncNowPlaying = createAsyncThunk(
  "movies/fetchAsyncNowPlaying",
  async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=cf3cfe4d6a99a54a38b0026fde575ce7&language=en-US&page=1`
    );
    return response.data.results;
  }
);

export const fetchSingleMovie = createAsyncThunk(
  "movies/fetchSingleMovie",
  async (id) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=cf3cfe4d6a99a54a38b0026fde575ce7`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  upcoming: {},
  toprated: {},
  similar:{},
  nowplaying:{},
  singleMovie: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSingleMovie: (state)=>{
      state.singleMovie = {};
    }
  },
  extraReducers: {
    //fetch movies
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successful");
      return { ...state, movies: payload };
    },

    // fetch upcoming
    [fetchAsyncUpcoming.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successful");
      return { ...state, upcoming: payload};
    },

    [fetchAsyncTopRated.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successful");
      return { ...state, toprated: payload};
    },

    [fetchAsyncSimilar.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successful");
      return { ...state, similar: payload};
    },
    
    [fetchAsyncNowPlaying.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successful");
      return { ...state, nowplaying: payload};
    },

    // fetch single movie
    [fetchSingleMovie.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successful");
      return { ...state, singleMovie: payload};
    },
  },
});

export const { removeSingleMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllUpcoming = (state) => state.movies.upcoming;
export const getAllTopRated = (state) => state.movies.toprated;
export const getAllSimilar = (state) => state.movies.similar;
export const getAllNowPlaying = (state) => state.movies.nowplaying;
export const getSingleMovie = (state) => state.movies.singleMovie;
export default movieSlice.reducer;
