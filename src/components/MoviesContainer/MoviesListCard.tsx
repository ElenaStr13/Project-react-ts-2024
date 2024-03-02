import {FC, PropsWithChildren} from 'react';

import {IMovie} from "../../interfaces/movieInterface";
import css from "./MoviesCard.module.css"
import {NavLink, useNavigate} from "react-router-dom";
import {Rating} from "react-custom-rating-component";
import {baseUrlImage} from "../../constants";
import {StarsRating} from "../StarsRating/StarsRating";
import {useAppContext} from "../../hooks/useAppContext";

interface IProps extends PropsWithChildren {
    movie: IMovie
}
const MoviesListCard: FC<IProps> = ({movie}) => {
    const {
        backdrop_path,
        id,
        original_title,
        vote_average
    } = movie;
    const {darkTheme} = useAppContext();
    const navigate = useNavigate();
    let rating;
    let voteAverage = vote_average;


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
    // console.log(rating)

    return (
        <div className={darkTheme? css.darkMoviesCard : css.lightMoviesCard} onClick={() => navigate(`/3/movie/${id.toString()}`, {state: {movie}})}>
            <img src={baseUrlImage + backdrop_path} alt={original_title}/>
            <StarsRating voteAverage={voteAverage} />
            <p>{original_title}</p>
        </div>
    );
};

export {MoviesListCard};