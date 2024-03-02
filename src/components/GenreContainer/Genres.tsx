import React, {useEffect, useState} from 'react';

import {IGenre} from "../../interfaces/genreInterface";
import {Genre} from "./Genre";
import css from "./Genres.module.css";
import {genreService} from "../../services";

const Genres = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);

    useEffect(() => {
        genreService.getAll().then(({data}) => {
            setGenres(data.genres)
        })
    }, []);
    return (
        <div className={css.Genres}>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};