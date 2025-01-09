import { useEffect, useRef, useState } from "react";

const movieBackground = ({ movies, genreNamesByIds, currentIndex, navigate }) => {
    const [imageUrl, setImageUrl] = useState(
        `https://image.tmdb.org/t/p/w780${movies?.[currentIndex]?.poster_path}`
    );

    const movieTitle = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (movies) {
                const isDesktop = window.innerWidth >= 1024;
                const imageType = isDesktop ? "original" : "w780";
                const moviePath = movies[currentIndex]?.backdrop_path || movies[currentIndex]?.poster_path;

                setImageUrl(`https://image.tmdb.org/t/p/${imageType}${moviePath}`);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [movies, currentIndex]);

    return (
        <section className="relative flex flex-col pt-[80px] after:content-[''] after:absolute after:inset-0 after:z-[1] after:bg-gradient after:h-[85vh]">
            <div
                src={imageUrl}
                alt={movies?.[currentIndex]?.original_name || "No Image"}
                className="absolute z-=[1] top-0 w-[100vw] right-0 h-[85vh] object-cover saturate-[1.2]"
                onLoad={(e) => (e.target.style.opacity = 1)}
                style={{ opacity: 0, transition: "opacity 0.5s" }}
            >
            </div>

            <div className="z-10 px-8 md:px-10 lg:px-12 2xl:px-16 pb-8">
                <div>
                    <div className="flex text-xs movieId:text-sm gap-4 text-white lg:text-lg lg:gap-6">

                    </div>
                </div>
            </div>
        </section>
    )
}