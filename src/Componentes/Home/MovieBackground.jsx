const movieBackground = ({ movies, genreNamesByIds, currentIndex, navigate }) => {
    const [imageUrl, setImageUrl] = useState(
        `https://image.tmdb.org/t/p/w780${movies?.[currentIndex]?.poster_path}`
    );

    const movieTitle = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if(movies)
        }
    })
}