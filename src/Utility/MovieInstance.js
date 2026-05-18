import axios from "axios";


const movieInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})
export default (movieInstance);

// 9b138eecf75c265f9bced99ed90e4124 api-key

// https://api.themoviedb.org/3/discover/movie?api_key=9b138eecf75c265f9bced99ed90e4124&with_genres=28
