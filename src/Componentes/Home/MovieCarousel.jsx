// Swiper
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    MdKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style/transition.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { viewTransition } from "../../utils/viewTransition";
import { getPosterUrl } from "../../utils/getPosterUrl";

const MovieCarousel = ({ movies }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showMovies, setShowMovies] = useState(8);

    // Atualizar o número de slides exibidos com base no tamanho da janela
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1400) {
                setShowMovies(16);
            } else if (window.innerWidth >= 1024) {
                setShowMovies(12);
            } else if (window.innerWidth >= 700) {
                setShowMovies(10);
            } else {
                setShowMovies(8);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [movies]);

    // Handle slide change
    const handleSlideChange = (swiper) => {
        setCurrentIndex(swiper.realIndex);
    };

    const navigate = useNavigate();

    const breakpoints = {
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

    const windowWidth = window.innerWidth;

    return (
        <div className='px-8 md:px-10 lg:px-12 2xl:px-16'>
            <h2 className='text-white text-[1.2rem] z-20 relative font-semibold mb-3'>
                Últimos filmes
            </h2>

            <div className='relative'>
                <Swiper
                    pagination={{
                        clickable: true,
                        el: ".swiper-paginacion",
                        renderBullet: function (index, className) {
                            return `<span class="${className} bg-white"></span>`;
                        },
                    }}
                    onSlideChange={(swiper) => handleSlideChange(swiper)}
                    breakpoints={breakpoints}
                    spaceBetween={10}
                    loop={movies?.length >= showMovies} // Apenas ativa o loop se houver slides suficientes
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className='mySwiper'
                    autoplay={{ delay: 4500 }}
                >
                    {movies?.slice(0, showMovies).map((movie) => (
                        <SwiperSlide key={movie.id} className='w-full'>
                            <div
                                onClick={(e) => {
                                    viewTransition(
                                        `/movie/${movie.id}`,
                                        navigate,
                                        e
                                    );
                                }}
                            >
                                <img
                                    src={getPosterUrl(movie, windowWidth)}
                                    alt={`Poster for ${movie.title}`}
                                    className={`mix-blend-normal h-auto w-[250px] sm:h-[270px] md:h-[280px] lg:w-[360px] object-contain rounded`}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Botões de navegação */}
                <div className='swiper-button-next absolute top-1/2 -right-8 md:-right-9 transform -translate-y-1/2 w-8  text-white opacity-80 after:content-none'>
                    <MdOutlineKeyboardArrowRight size={40} />
                </div>
                <div className='swiper-button-prev absolute top-1/2 -left-8 md:-right-9 transform -translate-y-1/2 w-8 text-white opacity-80 after:content-none'>
                    <MdKeyboardArrowLeft size={40} />
                </div>

                {/* Paginação */}
                <div className='relative z-10 swiper-paginacion w-full text-center space-x-4'></div>
            </div>
        </div>
    );
};

export default MovieCarousel;
