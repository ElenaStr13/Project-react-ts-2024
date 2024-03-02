import {FC, PropsWithChildren} from 'react';
import {IGenre} from "../../interfaces/genreInterface";
import css from "./Genre.module.css";
import {useAppContext} from "../../hooks/useAppContext";

interface IProps extends PropsWithChildren {
   genre: IGenre
}
const Genre: FC<IProps> = ({genre}) => {
    const {id: genre_id, name} = genre;
    const {genreId, setGenreId} = useAppContext();

    const FindByGenre = () => {
        setGenreId(genre_id)
    }

     return (
        <div className={css.Genre} onClick={FindByGenre}>
            <div>{name}</div>
        </div>
    );
};


export {Genre};