import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading]  = useState(true);
    const [movieId, setMovieId] = useState(id);
    console.log(movieId);
    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`        
            )
        ).json();
        // console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
        setMovieId(id);
    }
    // fetch(
    //     `https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`
    //     ).then(response => response.json()).then(json => console.log(json.data.movie));
    useEffect(() => {
        getMovie();
    }, [movieId]);

    return (
        <div>
            {loading ? <h2>Loading...</h2> : 
            <div>
                <div><Link to="/">BACK</Link></div>
                <img src={movie.large_cover_image} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>{movie.description_full}</p>
                <ul>
                    {movie.genres.map((genre) => (
                        <li key={genre}>
                            {genre}
                        </li>
                    ))}
                </ul>
            </div>
            }
            
        </div>
    )
}

export default Detail;