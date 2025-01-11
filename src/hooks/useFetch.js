import axios from "axios";
import { useState } from "react";

const useFetch = (baseUrl) => {
    const [infoApi, setInfoApi] = useState(null); // Armazena os dados retornados pela API
    const [isError, setIsError] = useState(false); // Indica se houve erro
    const [loading, setLoading] = useState(false); // Indica se a requisição está carregando


    const getApi = (path, query) => {
        const url = `${baseUrl}${path}?language=pt-BR&${query}`; // Adiciona o idioma PT-BR

        const headers = {
            Accept: "application/json",
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjJlNzU3MDc1NzZmMmQ0ZDQ4ODYxNTRkYmM2N2ZmOSIsIm5iZiI6MTczNjUxNDE4OS43NDEsInN1YiI6IjY3ODExYThkMjE4ZmQ1N2FjZjRlYWUzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ocdh3yqmndj5FnrIT9gqsxLUoSiF4C4Igx3vBBaUWrQ', // Usando variável de ambiente para token
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
