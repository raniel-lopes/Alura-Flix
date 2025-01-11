import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define un thunk para obtener los géneros
export const fetchGenres = createAsyncThunk(
    "genres/fetchGenres",
    async (ismovie) => {
        const headers = {
            Accept: "application/json",
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjJlNzU3MDc1NzZmMmQ0ZDQ4ODYxNTRkYmM2N2ZmOSIsIm5iZiI6MTczNjUxNDE4OS43NDEsInN1YiI6IjY3ODExYThkMjE4ZmQ1N2FjZjRlYWUzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ocdh3yqmndj5FnrIT9gqsxLUoSiF4C4Igx3vBBaUWrQ',
        };

        const url = `https://api.themoviedb.org/3/genre/${ismovie}/list?language=&locale=US`;
        const response = await axios.get(url, { headers });
        return response.data.genres;
    }
);

// estado global de generos
const genresSlice = createSlice({
    name: "homeMovies",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGenres.fulfilled, (state, action) => {
            // Almacena los géneros en el estado cuando se completa la solicitud
            return action.payload;
        });
    },
});

export const { setGenres, getGenres } = genresSlice.actions;

// Define géneros desde el estado global
export const selectGenres = (state) => state.genres;

// Funcion para obtener los nombres de los generos por IDs
export default genresSlice.reducer;