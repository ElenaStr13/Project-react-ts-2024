import {FC, PropsWithChildren} from 'react';
import {NavLink} from "react-router-dom";

import {useAppContext} from "../../hooks/useAppContext";
import css from './Header.module.css'
import {UserInfo} from "../UserContainer/UserInfo";

interface IProps extends PropsWithChildren {

}
const Header:FC <IProps> = () => {
    const {setGenreId, setSearch, setWithGenres, setDarkTheme, darkTheme, changeTheme} = useAppContext();


    const changeGenre =  () => {
        setGenreId(0);
        setSearch(false)
        setWithGenres(false)
    }

    const forSearch = () => {
        setSearch(true)
    }
    const changeGenres = () => {
        setWithGenres(true)
    }

    return (
        <div className={css.Header}>
            <NavLink to={'movie'} onClick={changeGenre}>DataBase for Movie</NavLink>
            <NavLink to={'movie'} onClick={changeGenre}>Movies</NavLink>
            <NavLink to={'movie'} onClick={changeGenres}>Genres</NavLink>
            <NavLink to={'/3/search/movie'} onClick={forSearch}>Search</NavLink>
            <div className={css.ForCheckbox}>
                <NavLink to={'movie'}>Theme</NavLink>
                <input type="checkbox" id="switch" onClick={changeTheme}/>
                <label htmlFor="switch">Toggle</label>
            </div>
            < UserInfo/>
        </div>
    );
};

Header.propTypes = {

};

export {Header};