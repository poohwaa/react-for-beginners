import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function DetailMovie({converImg, title, description, genres}) {
    return (
        <div>
            <div><Link to="/">BACK</Link></div>
            <img src={converImg} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
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

DetailMovie.propTypes = {
    converImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default DetailMovie;