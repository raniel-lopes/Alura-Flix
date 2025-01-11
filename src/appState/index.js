import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/categoriesSlice";
import typeMovieSlice from "./slices/typeMovieSlice";
import homeMovieSlice from "./slices/homeMovieSlice";

const store = configureStore({
    reducer: {
        genresMovies: categoriesSlice,
        type: typeMovieSlice,
        homeMovieSlice,
    },
});

export default store;