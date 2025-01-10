import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
    //Configurações da API
    const baseUrl = "https://api.themoviedb.org/3";
    const path = "/trending/tv/week";

    // Estados Globais e hooks
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genresMovies);
    const [popularMovies, fetchMovies, isError, isLoading] = useEffect(baseUrl);

    useEffect(() => {
        if (!genres.length) {
            dispatch(fetchGenres("tv"));
        }
        dispatch(setHomeValue(popularMovies));
    }, [genres, popularMovies]);

    if (isLoading) {
        return <
    }

}