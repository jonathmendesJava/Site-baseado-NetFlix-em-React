import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_MOVIE_API,
    params: {
        api_key: process.env.REACT_APP_MOVIE_TOKEN,
        language: "pt-BR",
    }

});

export default api;