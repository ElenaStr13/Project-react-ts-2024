import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {searchService} from "../../services";
import {IMovie} from "../../interfaces/movieInterface";
import {SearchContainer} from "./SearchContainer";
import css from './SearchMovies.module.css'



interface IProps extends PropsWithChildren {
          text:string
}

const SearchMovies:FC <IProps> = ({text}) => {
    const [searchIn, setSearchIn] = useState<IMovie[]>()

    useEffect(() => {
        searchService.getAll(text).then(({data}) => {
            setSearchIn(data.results)
        })
    }, [text]);

    return (
            <div className={css.AllMovies}>
                <div className={css.MoviesList}>
                    {searchIn && searchIn.map(movie => <SearchContainer key={movie.id} movie={movie}/>)}
                </div>
            </div>
    );
};

export {SearchMovies};