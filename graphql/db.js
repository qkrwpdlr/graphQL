import axios from 'axios'
const API_URL = "https://yts.am/api/v2/list_movies.json";

const getMovies = (limit, rating) => {
    axios.get(API_URL)
};
