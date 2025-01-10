import { createSlice } from "@reduxjs/toolkit";

// Criação do slice para gerenciar o estado relacionado aos filmes na página inicial
export const homeMovieSlice = createSlice({
    name: "homeMovie", //Nome indentificador do slice
    initialState: [], // Estado inicial, representado como uma lista vazia
    reducers: {
        // Define as ações para manipular o estado
        setHomeValue: (state, action) => {
            // Atualiza o estado com o valor recebido na payload
            return action.payload;
        },
        clearHomeValue: () => {
            // Reseta o estado para o valor inicial (lista vazia)
            return [];
        },
    },
});

// Exporta as ações criadas automaticamente pelo createSlice
export const { setHomeValue, clearHomeValue } = homeMovieSlice.actions;

// Exporta o reducer para ser usado na configuração do store
export default homeMovieSlice.reducer;
