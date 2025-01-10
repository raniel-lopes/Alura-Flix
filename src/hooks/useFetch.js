import axios from "axios";
import { useState } from "react"

const useFetch = (baseUrl) => {
    const [data, setData] = useState(null); //Armazena os dados que a API retorna
    const [error, setError] = useState(false); //Indica se ocorreu algum erro
    const [isLoading, setLoading] = useState(false); //Indica se a requisição está em andamento

    /**
    * Função para buscar dados da API
    * @param {string} path - Caminho da API a ser requisitado
    * @param {string} query - Query parameters adicionais
    */

    const fetchData = (path, query = "") => {
        const url = `${baseUrl}${path}?language=pt-BR&${query}`; //Idioma PT-BR adicionado

        const headers = {
            Accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_URL}`, //Usando váriaveis de ambiente
        };

        setIsLoading(true); //Inicia o carregamento
        axios
            .get(url, { headers })
            .then((response) => {
                setData(response.data); //Armazena os dados retornados
                setError(false); //Reseta o estado de erro
            })
            .catch((err) => {
                console.error(`Erro na requisição ${err}`);
                setError(true); //Define o estado de erro
            })
            .finally(() => setIsLoading(false)); // Finaliza o estado de carregamento
    };

    return [data, fetchData, error, isLoading]
};

export default useFetch;
