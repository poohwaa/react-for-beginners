import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";

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
            <DetailMovie
            converImg={movie.large_cover_image}
            title={movie.title}
            description={movie.description_full}
            genres={movie.genres}
            />
            }
            
        </div>
    )
}

export default Detail;