import axios from "axios";

export const getMovies = async (limit, rating) => {
    const REQUEST_URL = "https://yts-proxy.now.sh/list_movies.json";
    const {
        data: {
            data: {movies}
        }
    } = await axios.get(REQUEST_URL, {
        params: {
            limit,
            minimum_rating: rating
        }
    });
    return movies
};

export const getDescription = async (id) => {
    const REQUEST_URL = "https://yts-proxy.now.sh/movie_details.json";
    const {
        data: {
            data: { movie }
        }
    } = await axios.get(REQUEST_URL, {
        params: { 
            movie_id: id
        }
    });
    return movie
}

export const getSuggestion = async (id) => {
    const REQUEST_URL = "https://yts-proxy.now.sh/movie_suggestions.json";
    const {
        data: {
            data: { movies }
        }
    } = await axios.get(REQUEST_URL, {
        params: { 
            movie_id: id
        }
    });
    return movies
}