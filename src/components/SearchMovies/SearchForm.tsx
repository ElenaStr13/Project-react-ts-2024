import css from './SearchMovies.module.css';

import {useAppContext} from "../../hooks/useAppContext";
import {SubmitHandler, useForm} from "react-hook-form";
import {SearchMovies} from "./SearchMovies";

const SearchForm = () => {
    const {handleSubmit, reset,register} =useForm();
    const {text, setText, darkTheme} = useAppContext()

    const searchTitle:SubmitHandler<any> = (e) => {
        console.log(e)
        setText(e.text)
        reset()
        return text
    };

    return (
        <div className={css.AllSearch} onSubmit={handleSubmit(searchTitle)}>
            <form >
            <input
                type='text'
                className={darkTheme? css.darkSearch : css.lightSearch}
                value={text?? ''}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                disabled={!text}
                className={darkTheme? css.darkButton : css.lightButton}
            >Search</button>
            </form>
            <SearchMovies text={text}/>
        </div>
    );
};

export {SearchForm};