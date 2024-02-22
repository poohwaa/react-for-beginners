import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";
import styles from "./Detail.module.css"

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
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            )
            :
            (
                <div className={styles.movie}>
                    <div><Link to="/" className={styles.previous}>&laquo; BACK</Link></div>
                    <DetailMovie
                    converImg={movie.large_cover_image}
                    title={movie.title}
                    description={movie.description_full}
                    genres={movie.genres}
                    year={movie.year}
                    />
                </div>

            ) 

            }
        </div>
    )
}

export default Detail;