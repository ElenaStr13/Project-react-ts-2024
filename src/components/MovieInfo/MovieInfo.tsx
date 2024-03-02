import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {Badge} from "react-bootstrap";

import {IMovie} from "../../interfaces/movieInterface";
import {baseUrlImage} from "../../constants";
import css from "./MovieInfo.module.css";
import {StarsRating} from "../StarsRating/StarsRating";
import {genreService} from "../../services";
import {IGenre} from "../../interfaces/genreInterface";

interface IProps extends PropsWithChildren {
    movieDertails: IMovie
}
const MovieInfo: FC<IProps> = ({movieDertails}) => {
    const {id,
        backdrop_path,
        genres,
        genre_ids,
        title,
        original_title,
        overview,
        original_language,
        release_date,
        vote_average
    } = movieDertails;
    let voteAverage = vote_average;
    const [genresAll, setGenresAll] = useState<IGenre[]>()
    //const [genreMovie, setGenreMovie] = useState<string[]>([]);

    useEffect(() => {
        genreService.getAll().then(({data}) => {
            setGenresAll(data.genres)

        })
    }, [genre_ids]);
     console.log(genresAll);
     console.log(genre_ids);
     let genreOfMovie: string[] = [];


    genresAll&&genresAll.map(genre => {
        for (let i = 0; i < genre_ids.length; i++) {
            if (+genre.id === +genre_ids[i] ) {
                genreOfMovie.push(genre.name)
                console.log(genre.name);
            }
        }
        return genreOfMovie
    })
    console.log(genreOfMovie.join(','));
    return (
        <div className={css.MovieDetails}>
            <p>{original_title}</p>
            <p>({original_title})</p>
            <div className={css.ImgInfo}>
                <img src={baseUrlImage + backdrop_path} alt={original_title}></img>
                <div>
                    <div className={css.Rating}>
                        <div>Rating</div>
                        <StarsRating voteAverage={voteAverage}/>
                    </div>
                    <div>Genres</div>
                    <Badge className={css.badge}>{genreOfMovie.join(', ')}</Badge>
                    <div>Original language</div>
                    <p>{original_language}</p>
                    <div>Release Date</div>
                    <p>{release_date}</p>
                </div>
            </div>
            <div className={css.OverView}>
                <h4>Overview</h4>
                <p>{overview}</p>
            </div>
        </div>
    );
};

export {MovieInfo};