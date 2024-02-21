import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}) {
    return (
        <div key={id}>
            <img src={coverImg} alt={title} />
            <h2><Link to={`/movie/${id}`} >{title}</Link></h2>
            // {`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`}
            <p>{summary}</p>
            <ul>
                {genres.map((genre) => (
                    <li key={genre}>
                        {genre}
                    </li>
                ))}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;