import axios from "axios";
import { useState } from "react";

const useFetch = (baseUrl) => {
    const [infoApi, setInfoApi] = useState(null); // Armazena os dados retornados pela API
    const [isError, setIsError] = useState(false); // Indica se houve erro
    const [loading, setLoading] = useState(false); // Indica se a requisição está carregando

    /**
     * Função para buscar dados da API
     * @param {string} path - Caminho da API a ser requisitado
     * @param {string} query - Query parameters adicionais
     */
    const getApi = (path, query = "") => {
        const url = `${baseUrl}${path}?language=pt-BR&${query}`; // Adiciona o idioma PT-BR

        const headers = {
            Accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_URL}`, // Usando variável de ambiente para token
        };

        setLoading(true); // Inicia o carregamento

        // Requisição GET com Axios
        axios
            .get(url, { headers })
            .then((res) => {
                setInfoApi(res.data); // Armazena os dados retornados
                setIsError(false); // Reseta o estado de erro
            })
            .catch((err) => {
                console.error(`Erro na requisição: ${err}`); // Exibe erro no console
                setIsError(true); // Define que houve erro
            })
            .finally(() => setLoading(false)); // Finaliza o estado de carregamento
    };

    return [infoApi, getApi, isError, loading]; // Retorna os dados, função, erro e estado de carregamento
};

export default useFetch;
