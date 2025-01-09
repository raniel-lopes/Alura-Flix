import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style/transition.css";

import { useEffect, useState } from "react";
import MovieBackground from "./MovieBackground";

import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { viewTransition } from "../../utils/viewTransition";
import { getPosterUrl } from "../../utils/getPosterUrl";


const MovieCarousel = ({ movies, genres }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [movieToShow, setMoviesToShow] = useState(8);

    useEffect(() => {
        const updateMoviesToShow = () => {
            const width = window.innerWidth;
            if (width >= 1400) {
                setMoviesToShow(16);
            } else if (width >= 1024) {
                setMoviesToShow(12);
            } else if (width >= 700) {
                setMoviesToShow(10);
            } else {
                setMoviesToShow(8);
            }
        };

        window.addEventListener("resize", updateMoviesToShow);
        updateMoviesToShow();

        return () => {
            window.removeEventListener("resize", updateMoviesToShow);
        };
    }, []);

    const onSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    constMapGenreNames = (genreList, ids) => {
        return ids.map((id) => {
            const genre = genreList.find((g) => g.id === id);
            return genre ? genre.name : `Unknown Genre (${id})`;
        });
    };

    const genreLabels = 
        genre && movies?.[activeIndex]?.genre_ids
            ? mapGenreNames(genre, movies[activeIndex].genre_ids)
            : [];

    const navigate = useNavigate();

    const responsiveBreakpoints = {
        300: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 4, 
        },
        1024: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 6,
        },
        1600: {
            slidesPerView: 7,
        },
        1800: {
            slidesPerView: 8,
        },
    };

    const currentWindowWidth = window.innerWidth;

    return (
        <>
            <MovieBackground 
                movies={movies}
                currentIndex={activeIndex}
                genreNamesByIds={genreLabels}
                navigate={navigate}
            />
            <div className="container mx-auto px-8 lg:px-12">
                <h2 className="text-white text-xl font-semibold mb-3">
                    Últimos Lançamentos
                </h2>

                <div className="relative">
                    <Swiper
                        pagination={{
                            clickable: true,
                            el: ".swiper-pagination",
                            renderBullet: (index, className) =>
                                `<span class="${className} bg-white"></span>`,
                        }}
                        onSlideChange={onSlideChange}
                        breakpoints={responsiveBreakpoints}
                        spaceBetween={10}
                        loop={true}
                        navigation={{
                            nextEl: ".swiper-next-button",
                            prevEl: ".swiper-prev-button",
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="movie-carousel"
                        autoplay={{ delay: 5000 }}
                    >
                        {movies?.slice(0, moviesToShow).map((movie) => (
                            <SwiperSlide key={movie.id} className="movie-slide">
                                <div
                                    onClick={(e) =>
                                        viewTransition(
                                            `/movie/${movie.id}`,
                                            navigate,
                                            e
                                        )
                                    }
                                >
                                    <img 
                                        src={getPosterUrl(movie, currentWindowWidth)}
                                        alt={`Poster for ${movie.title}`}
                                        className="rounded object-contain h-auto w-full"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-next-button absolute top-1/2 -right-8 transform -translate-y-1/2 w-8 text-white opacity-80">
                        <MdOutlineKeyboardArrowRight size={40} />
                    </div>
                    <div className="swiper-prev-button absolute top-1/2 -left-8 tranform -translate-y-1/2 w-8 text-white opacity-80">
                        <MdKeyboardArrowLeft size={40} />
                    </div>
                    <div className="swiper-pagination w-full text-center space-x-4 mt-4"></div>
                </div>
            </div>
        </>
    );
};

export default MovieCarousel;