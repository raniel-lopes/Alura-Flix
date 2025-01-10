import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingHome from "../Componentes/Loading/Home/LoadingHome"
import MovieCarousel from "../Componentes/Home/MovieCarousel"
import AdBanner from "../Componentes/Home/AdBanner"
import AdBanner2 from "../Componentes/Home/AdBanner2"
import Button from "../Componentes/Button";
import Slider from "../Componentes/Slider";
import useFetch from "../hooks/useFetch";
import { fetchGenres } from "../appState/slices/categoriesSlice"
import { setHomeValue } from "../appState/slices/homeMovieSlice";

const HomePage = () => {
    //Configurações da API
    const baseUrl = "https://api.themoviedb.org/3";
    const path = "/trending/tv/week";

    // Estados Globais e hooks
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genresMovies);
    const [popularMovies, fetchMovies, isError, isLoading] = useFetch(baseUrl);

    useEffect(() => {
        fetchMovies(path);
    }, []);

    useEffect(() => {
        if (!genres.length) {
            dispatch(fetchGenres("tv"));
        }
        dispatch(setHomeValue(popularMovies));
    }, [genres, popularMovies]);

    if (isLoading) {
        return <LoadingHome />;
    }

    return (
        <div>
            {isError && <p>Ocorreu um erro ao carregar os filmes.</p>}
            {!isLoading && !isError && (
                <main>
                    {/* Slider Principal */}
                    <MovieCarousel movies={popularMovies$.results} genres={genres} />

                    {/* Anúncio */}
                    <section className="px-8 md:px-10 lg:px-12 2xl:px-16 mt-8 text-white sm:text-center md:flex md:text-left md:gap-8 md:items-center md:flex-row-reverse md:justify-center xl:gap-20">
                        <div className="mb-4 lg:mb-0">
                            <h4 className="font-semibold text-lg lg:text-xl xl:text-3xl xl:mb-2">
                                Episódios Gratuitos
                            </h4>
                            <p className="opacity-80 text-xs md:mb-4 lg:text-base xl:text-lg lg:mb-8">
                                Descubra a emoção nos lançamentos de filmes e séries icônicas!
                            </p>
                            <div className="hidden md:block">
                                <Button text="VER AGORA" noNavigate={false} />
                            </div>
                        </div>
                        <AdBanner url="/anuncio.avif" />
                    </section>

                    {/* Seção de Filmes Populares */}
                    <section className="px-8 md:px-10 lg:px-12 2xl:px-16 my-8">
                        <div className="mn-7">
                            <Slider path="/movie/popular" titulo="Mais Populares" isMovie="/movie" />
                        </div>
                        <div className="mb-7">
                            <Slider
                                path="/movie/popular"
                                query="page=2"
                                titulo="Do Cinema para sua Casa"
                                subtitulo="Culturas valiosas. Histórias diversas. Energia vibrante."
                                isMovie="/movie"
                            />
                        </div>
                    </section>

                    {/* Anúncio Secundário */}
                    <div className="sm:hidden">
                        <AdBanner
                            url="https://art-gallery-latam.api.hbo.com/images/fzElsTTwA7Knig15UGwmN$$$LFEFOOTER$$$latam/background?v=f30a3f85c906dc49eb62955118d74cdb&format=png&size=400x400&compression=low&protection=false&scaleDownToFit=false&language=es-419"
                            btn="Categoria"
                            tittle="Descubra o cinema em casa conosco!"
                        />
                    </div>
                    <div className="hidden sm:block">
                        <AdBanner2
                            url="https://i.blogs.es/8cb1c2/mejores-peliculas-accion-2021/1366_2000.jpeg"
                            btn="Categoria"
                            tittle="Descubra o cinema em casa conosco!"
                        />
                    </div>

                    {/* Seção de Séries e Filmes */}
                    <section className="px-8 md:px-10 lg:px-12 2xl:px-16 mt-8">
                        <div className="mb-7">
                            <Slider path="/tv/top_rated" titulo="Noite de Filmes Todos os Dias" isMovie="/tv" />
                        </div>
                        <div className="pb-7">
                            <Slider
                                path="/movie/top_rated"
                                titulo="Coleções Icônicas"
                                subtitulo="Histórias inesquecíveis que nos tocaram o coração."
                                isMovie="/movie"
                            />
                        </div>
                    </section>
                </main>
            )}
        </div>
    );
};

export default HomePage;