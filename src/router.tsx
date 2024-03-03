import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages/MoviesPage";
import {MoviesDetailsPage} from "./pages/MoviesDetailsPage";
import {SearchPage} from "./pages/SearchPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <MoviesPage/>
            },
            {
                path: 'movie', element: <MoviesPage/>
            },
            {
                path: '/3/movie/:id', element: <MoviesDetailsPage/>
            },
            {
                path: '/3/search/movie', element: <SearchPage/>
            }
        ]
    }
])

export {
    router
}