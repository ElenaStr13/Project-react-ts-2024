import React, {useEffect, useState} from 'react';
import {useAppLocation} from "../hooks/useAppLocation";
import {IMovie} from "../interfaces/movieInterface";
import {useParams} from "react-router-dom";
import {movieService} from "../services/movieService";
import {MovieInfo} from "../components/MovieInfo/MovieInfo"
import {useAppContext} from "../hooks/useAppContext";

const MoviesDetailsPage = () => {
    const {state} = useAppLocation<{movie: IMovie}>();
    const [movieDertails, setMovieDetails] = useState<IMovie>(null);
    const {id} = useParams();

    useEffect(() => {
        if (state?.movie) {
            setMovieDetails(state.movie)
            console.log(state.movie)
        } else {
            movieService.getById(+id).then(({data}) => {
                setMovieDetails(data);
                console.log(data); 
            })
        }
    }, [id,state]);

    return (
        <div>
            {movieDertails && <MovieInfo movieDertails={movieDertails}/>}
        </div>
    );
};

export {MoviesDetailsPage};