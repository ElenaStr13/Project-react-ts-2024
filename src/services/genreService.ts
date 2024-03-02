import {IRes} from "../types";
import {apiService} from "./apiService";
import {urls} from "../constants";
import {IAllGenre} from "../interfaces/genreInterface";

const genreService = {
    getAll: (): IRes<IAllGenre > => apiService.get(urls.genres.base)
}

export {genreService}