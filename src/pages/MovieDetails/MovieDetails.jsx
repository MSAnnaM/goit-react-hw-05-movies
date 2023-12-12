import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchSearch } from 'services/api';
import Notification from '../../components/Notification/Notification';
import Loader from '../../components/Loader/Loader';
import FilmInfo from '../../components/FilmInfo/FilmInfo';
import BackButton from '../../components/BackButton/BackButton';
import { LinksWrapper, LinkItem } from './MovieDetails.styled';

const FilmDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [film, setFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);

    const retrieveData = async () => {
      try {
        const retrievedFilm = await fetchSearch(movieId);
        setFilm(retrievedFilm);
      } catch ({ message }) {
        Notification(message);
      } finally {
        setIsLoading(false);
      }
    };
    retrieveData();
  }, [movieId]);

  const backPath = location?.state?.from ?? '/';

  return (
    <>
      {isLoading && <Loader />}
      <BackButton path={backPath} />
      {film && <FilmInfo film={film} />}
      <LinksWrapper>
        <LinkItem to="cast">Cast</LinkItem>
        <LinkItem to="reviews">Reviews</LinkItem>
      </LinksWrapper>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default FilmDetails;
