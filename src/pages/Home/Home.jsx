import { Main, Title } from './Home.styled';
import MoviesList from '../../components/MoviesList/MoviesList'
import { useState, useEffect } from 'react';
import { fetchTrend } from 'services/api';
import Notification from '../../components/Notification/Notification';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const [moviesData, updateMoviesData] = useState([]);
  const [isLoading, updateLoadingStatus] = useState(true);

  useEffect(() => {
    updateLoadingStatus(true);

    const getTrendingMovies = async () => {
      try {
        const movies = await fetchTrend();
        updateMoviesData(movies);
      } catch ({ message }) {
        Notification(message);
      } finally {
        updateLoadingStatus(false);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <Main>
      {isLoading && <Loader />}
      <Title />
      <MoviesList movies={moviesData}></MoviesList>
    </Main>
  );
};
export default Home;
