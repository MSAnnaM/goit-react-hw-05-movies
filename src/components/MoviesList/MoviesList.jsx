import defaultImage from '../../images/default-poster.jpg';
import {
  List,
  ListItem,
  Image,
  MovieLink,
  Title,
  ReleaseDate,
} from './MoviesList.styled';

const MovieList = ({ movies, location }) => {
  return (
    <List>
      {movies.map(({ id, original_title, poster_path, release_date }) => (
        <ListItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <Image
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w200${poster_path}`
                  : defaultImage
              }
              alt={original_title}
            />
            <Title>{original_title}</Title>
            {release_date && <ReleaseDate />}
          </MovieLink>
        </ListItem>
      ))}
    </List>
  );
};
export default MovieList;
