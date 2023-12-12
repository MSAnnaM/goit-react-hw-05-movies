import axios from 'axios';

const KEY = 'd5170ea2407a5ced420ab5693f361d7d';
axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.params = {
  api_key: KEY,
};
export const fetchTrend = async () => {
  const { data } = await axios.get('/3/trending/movie/week');
  return data.results;
};
export const fetchSearch = async id => {
  const { data } = await axios.get(`/3/movie/${id}`);

  return data;
};

export const fetchMovieDetailsData = async (query, page) => {
  const { data } = await axios.get(
    `/3/search/movie?query=${query}&page=${page}`
  );

  return data;
};

export const getCast = async id => {
  const { data } = await axios.get(`/3/movie/${id}/credits`);

  return data;
};

export const getReview = async id => {
  const { data } = await axios.get(`3/movie/${id}/reviews`);

  return data;
};