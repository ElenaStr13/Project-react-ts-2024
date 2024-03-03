import {FC, PropsWithChildren} from "react";
import {Outlet} from "react-router-dom";

import {Header} from "../components/Header";
import {Genres} from "../components/GenreContainer/Genres";
import css from "./MainLayout.module.css";
import {useAppContext} from "../hooks/useAppContext";


interface IProps extends PropsWithChildren {

}
const MainLayout: FC<IProps> = () => {

    const {withGenres, darkTheme} = useAppContext();

    return (
        <div className={darkTheme? css.Dark : css.Light}>
            <Header/>
            {withGenres && <Genres/>}
             <Outlet />
        </div>
    );
};


export {MainLayout};