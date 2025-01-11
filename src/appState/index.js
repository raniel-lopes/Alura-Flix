import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "./slices/genresSlice";
import typeMovieSlice from "./slices/typeMovieSlice";
import homeMovieSlice from "./slices/homeMovieSlice";

const store = configureStore({
    reducer: {
        genresMovies: genresSlice,
        type: typeMovieSlice,
        homeMovieSlice,
    },
});

export default store;