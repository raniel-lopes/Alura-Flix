import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define um thunk para buscar as categorias (antes chamados de gêneros)
export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async (contentType) => {
        const headers = {
            Accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_URL}`,
        };

        const url = `https://api.themoviedb.org/3/genre/${contentType}/list?language=pt-BR&locale=BR`;
        const response = await axios.get(url, { headers });
        return response.data.genres;
    }
);

// Estado global para armazenar as categorias
const categoriesSlice = createSlice({
    name: "movieCategories", // Nome da slice alterado
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            // Armazena as categorias no estado global quando a solicitação for bem-sucedida
            return action.payload;
        });
    },
});

// Exporta o reducer, o qual será usado na configuração da store
export const selectCategories = (state) => state.categories;

export default categoriesSlice.reducer;
