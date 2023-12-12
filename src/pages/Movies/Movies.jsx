import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import MovieList from '../../components/MoviesList/MoviesList';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import { fetchMovieDetailsData } from '../../services/api';
import Notification from '../../components/Notification/Notification';
import PaginationListComponent from '../../components/PaginationListComponent/PaginationListComponent';


const MoviesPage = () => {
  const [searchParams, updateSearchParams] = useSearchParams();
  const location = useLocation();
  const [moviesData, updateMoviesData] = useState([]);
  const [isLoading, updateLoadingStatus] = useState(false);
  const [currentPage, updateCurrentPage] = useState(1);
  const [totalPages, updateTotalPages] = useState(0);

  const handleSearch = query => {
    updateCurrentPage(1);
    updateSearchParams({ query: query, page: currentPage });
  };

  useEffect(() => {
    const searchQuery = searchParams.get('query') || '';
    if (!searchQuery) return;
    updateLoadingStatus(true);

    const fetchSearchMovies = async () => {
      try {
        const { page, results, total_pages } = await fetchMovieDetailsData(
          searchQuery,
          currentPage
        );

        updateMoviesData(results);
        updateCurrentPage(page);
        updateTotalPages(total_pages);
        updateSearchParams({ query: searchQuery, page: currentPage });

        if (!results.length) {
          updateSearchParams({});
          return Notification(`Sorry, no movies found on query ${searchQuery}`);
        }

        return results;
      } catch ({ message }) {
        Notification(message);
      } finally {
        updateLoadingStatus(false);
      }
    };
    fetchSearchMovies();
  }, [searchParams, currentPage, updateSearchParams]);

  return (
    <>
      {isLoading && <Loader />}
      <SearchComponent onSearch={handleSearch} />

      {totalPages > 1 && (
        <PaginationListComponent totalPages={totalPages} currentPage={currentPage} onPageChange={updateCurrentPage} />
      )}

      {moviesData.length > 0 && <MovieList movies={moviesData} location={location} />}
    </>
  );
};

export default MoviesPage;