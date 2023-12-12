import defaultImage from '../../images/default-poster.jpg';
import {
  SectionWrapper,
  SectionInfo,
  FilmPoster,
  FilmDescription,
  FilmTitle,
  Divider,
  SubHeading,
  GenreList,
} from './FilmInfo.styled';

const FilmInfo = ({
  film: { backdrop_path, original_title, poster_path, overview, genres },
}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const posterImage = poster_path ? posterUrl : defaultImage;

  const backdropUrl = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  const backdropImage = backdrop_path ? backdropUrl : defaultImage;

  return (
    <SectionWrapper $backdropImage={backdropImage}>
      <SectionInfo>
        <FilmPoster src={posterImage} alt={original_title} />
        <FilmDescription>
          <FilmTitle>{original_title}</FilmTitle>
          <Divider />
          <SubHeading>Overview</SubHeading>
          <p>{overview}</p>

          {genres.length > 0 && (
            <>
              <SubHeading>Genres</SubHeading>
              <GenreList>
                {genres.map(genre => (
                  <p key={genre.id}>{genre.name}</p>
                ))}
              </GenreList>
            </>
          )}
        </FilmDescription>
      </SectionInfo>
    </SectionWrapper>
  );
};

export default FilmInfo;
