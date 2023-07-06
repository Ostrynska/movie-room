import axios from 'axios';
import { toast } from 'react-hot-toast';

export const API_KEY = 'd20de05767e33e4f2fb018551512ab87';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  api_key: `${API_KEY}`,
};

// Trending
export const getTrending = async () => {
  try {
    const { data } = await axios.get(`trending/movie/day`);
    return data;
  } catch (error) {
    toast.error('Something went wrong, please try again');
  }
};

// Search
export const getSearch = async query => {
  try {
    const { data } = await axios.get(`search/movie?query=${query}`);
    return data;
  } catch (error) {
    toast.error('Something went wrong, please try again');
  }
};

// Details
export const getDetails = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}`);
    return data;
  } catch (error) {
    toast.error('Something went wrong, please try again');
  }
};

// Cast
export const getCast = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}/credits`);
    return data.cast;
  } catch (error) {
    toast.error('Something went wrong, please try again');
  }
};

// Reviews
export const getReviews = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}/reviews`);
    return data.results;
  } catch (error) {
    toast.error('Something went wrong, please try again');
  }
};
