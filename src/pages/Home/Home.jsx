import { Main, Title } from './Home.styled';
import MoviesList from '../../components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { fetchTrend } from 'services/api';
import Notification from '../../components/Notification/Notification';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setLoadingStatus] = useState(true);

  useEffect(() => {
    setLoadingStatus(true);

    const getTrendingMovies = async () => {
      try {
        const movies = await fetchTrend();
        setMoviesData(movies);
      } catch ({ message }) {
        Notification(message);
      } finally {
        setLoadingStatus(false);
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
