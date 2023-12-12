import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import MovieList from '../../components/MoviesList/MoviesList';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import { fetchMovieDetailsData } from '../../services/api';
import Notification from '../../components/Notification/Notification';
import PaginationListComponent from '../../components/PaginationListComponent/PaginationListComponent';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setLoadingStatus] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = query => {
    setCurrentPage(1);
    setSearchParams({ query: query, page: currentPage });
  };

  useEffect(() => {
    const searchQuery = searchParams.get('query') || '';
    if (!searchQuery) return;
    setLoadingStatus(true);

    const fetchSearchMovies = async () => {
      try {
        const { page, results, total_pages } = await fetchMovieDetailsData(
          searchQuery,
          currentPage
        );

        setMoviesData(results);
        setCurrentPage(page);
        setTotalPages(total_pages);
        setSearchParams({ query: searchQuery, page: currentPage });

        if (!results.length) {
          setSearchParams({});
          return Notification(`Sorry, no movies found on query ${searchQuery}`);
        }

        return results;
      } catch ({ message }) {
        Notification(message);
      } finally {
        setLoadingStatus(false);
      }
    };
    fetchSearchMovies();
  }, [searchParams, currentPage, setSearchParams]);

  return (
    <>
      {isLoading && <Loader />}
      <SearchComponent onSearch={handleSearch} />

      {totalPages > 1 && (
        <PaginationListComponent
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}

      {moviesData.length > 0 && (
        <MovieList movies={moviesData} location={location} />
      )}
    </>
  );
};

export default MoviesPage;
