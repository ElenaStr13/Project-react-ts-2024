import {createContext, FC, PropsWithChildren, ReactNode, useState} from "react";

const Context = createContext<any>(null)

interface IProps extends PropsWithChildren {

}

const ContextProvider: FC<IProps> = ({children}) => {
    const [trigger, setTrigger] = useState(null);
    const [withGenres, setWithGenres] = useState<boolean>(null);
    const [genreId, setGenreId] = useState<number>();
    const [search, setSearch] = useState<boolean>(null);
    const [text, setText] = useState<string>('');
    const [darkTheme, setDarkTheme] = useState<boolean>(true);

    const changeTheme = () => {
        setDarkTheme(darkTheme => !darkTheme)
        }

    return (
            <Context.Provider value={{trigger,
                setTrigger,
                genreId,
                setGenreId,
                search,
                setSearch,
                withGenres,
                setWithGenres,
                text,
                setText,
                darkTheme,
                setDarkTheme,
                changeTheme
            }}>
                {children}
            </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};