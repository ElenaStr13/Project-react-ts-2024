import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces/movieInterface";
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
        id,
        original_title,
        vote_average
    } = movie;
    const navigate = useNavigate();
    let voteAverage = vote_average;
    const {darkTheme} = useAppContext();

    return (
        <div className={darkTheme? css.darkMoviesCard : css.lightMoviesCard} onClick={() => navigate(`/3/movie/${id.toString()}`, {state: {movie}})}>
            <img src={baseUrlImage + backdrop_path} alt={original_title}/>
            <StarsRating voteAverage={voteAverage} />
            <p>{original_title}</p>
        </div>
    );
};

export {SearchContainer};