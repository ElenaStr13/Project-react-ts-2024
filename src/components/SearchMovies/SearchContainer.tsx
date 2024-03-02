import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces/movieInterface";
import {useNavigate} from "react-router-dom";
import css from "../MoviesContainer/MoviesCard.module.css";
import {baseUrlImage} from "../../constants";
import {StarsRating} from "../StarsRating/StarsRating";
import {useAppContext} from "../../hooks/useAppContext";

interface IProps extends PropsWithChildren {
    movie: IMovie
}
const SearchContainer: FC<IProps> = ({movie}) => {
    const {
        backdrop_path,
        genre_ids,
        id,
        original_title,
        vote_average
    } = movie;
    const navigate = useNavigate();
    let rating;
    let voteAverage = vote_average;
    const {darkTheme} = useAppContext();


    if (vote_average<=2) {
        rating=1
    } else if (vote_average<=4) {
        rating=2
    } else if (vote_average<=6) {
        rating=3
    } else if (vote_average<=8) {
        rating=4
    } else if (vote_average<=10) {
        rating=5
    }

    return (
        <div className={darkTheme? css.darkMoviesCard : css.lightMoviesCard} onClick={() => navigate(`/3/movie/${id.toString()}`, {state: {movie}})}>
            <img src={baseUrlImage + backdrop_path} alt={original_title}/>
            <StarsRating voteAverage={voteAverage} />
            <p>{original_title}</p>
        </div>
    );
};

export {SearchContainer};