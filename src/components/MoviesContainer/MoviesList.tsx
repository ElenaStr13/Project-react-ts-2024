import {PropsWithChildren, useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces/movieInterface";
import {useAppContext} from "../../hooks/useAppContext";
import {MoviesListCard} from "./MoviesListCard";
import css from './MoviesList.module.css';
import {movieService} from "../../services";

interface IProps extends PropsWithChildren {

}
const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]>([] )
    const [query, setQuery] = useSearchParams({page: '1'});
    const [previous, setPrevious] = useState( 0);
    const page = +query.get('page');

    const {genreId,darkTheme} = useAppContext();
    const navigate = useNavigate();


        useEffect(() => {
            if (genreId) {
                movieService.getByGenre(page, genreId.toString() ).then(({data})=> {
                    setMovies(data.results);
                })
            } else {
                movieService.getAll(page).then(({data}) => {
                    setMovies(data.results);
                })
            }
        }, [page, genreId, navigate]);

     const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString());
            console.log("prev" + page)
            setPrevious(page);
            return prev
        })
    }

    const next = () => {
        setQuery(next => {
            next.set('page', (+next.get('page') + 1).toString());

            return next
        })
    }
    return (
        <div className={css.AllMoviesList}>
            <div className={css.MoviesList}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            <div className={darkTheme? css.darkButtons : css.lightButtons}>
                <button onClick={prev} className={darkTheme? css.darkButton : css.lightButton}>Prev page</button>
                <div>{page}</div>
                <button onClick={next} className={darkTheme? css.darkButton : css.lightButton}>Next page</button>
            </div>
            {/*disabled={!setPrevious} */}
            {/*disabled={!prevNext.next} */}
        </div>
    );
};

export {MoviesList};