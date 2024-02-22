import PropTypes from "prop-types";
import styles from "./DetailMovie.module.css";

function DetailMovie({converImg, title, description, genres, year}) {
    return (
        <div className={styles.movie}>
            <img src={converImg} alt={title} className={styles.movie__img} />
            <h2 className={styles.movie__title}>{title}</h2>
            <h3 className={styles.movie__year}>{year}</h3>
            <p>{description}</p>
            <ul className={styles.movie__genres}>
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
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.number.isRequired
}

export default DetailMovie;