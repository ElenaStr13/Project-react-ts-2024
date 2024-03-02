import {FC, PropsWithChildren} from "react";
import {Outlet} from "react-router-dom";

import {Header} from "../components/Header";
import {Genres} from "../components/GenreContainer/Genres";
import css from "./MainLayout.module.css";
import {useAppContext} from "../hooks/useAppContext";
import {SearchForm} from "../components/SearchMovies/SearchForm";

interface IProps extends PropsWithChildren {

}
const MainLayout: FC<IProps> = () => {

    const {search, withGenres, text, darkTheme} = useAppContext();

    return (
        <div className={darkTheme? css.Dark : css.Light}>
            <Header/>
            {search && <SearchForm/>}
            {withGenres && <Genres/>}
             <Outlet />
        </div>
    );
};


export {MainLayout};