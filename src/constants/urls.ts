const baseURL: string = 'https://api.themoviedb.org';
const baseUrlImage = 'https://image.tmdb.org/t/p/w500';

const movies: string = '/3/discover/movie';
const genres: string = '/3/genre/movie/list';
const search: string = '/3/search/movie?query=';
const urls = {
    movies: {
        base: movies,
        byId: (id: number): string => `3/movie/${id}`
    },
    genres: {
        base: genres,
        byId: (id: number): string => `${genres}/${id}`
    },
    search
}

export {
    baseURL,
    baseUrlImage,
    urls
}