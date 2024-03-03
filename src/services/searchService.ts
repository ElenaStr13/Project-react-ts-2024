import {IRes} from "../types";
import {ISomeData} from "../interfaces/movieInterface";
import {apiService} from "./apiService";
import {urls} from "../constants";
// https://api.themoviedb.org/3/search/movie

const searchService = {
    getAll: (text:string): IRes<ISomeData> => apiService.get(`${urls.search}${text}`)
}

export {searchService}