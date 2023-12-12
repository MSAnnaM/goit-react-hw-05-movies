import styled from 'styled-components';

export const SectionWrapper = styled.div`
  background: url(${props => props.$backdropImage});
  background-size: cover;
  background-position: center;
  color: #fff;
  padding: 20px;
`;

export const SectionInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FilmPoster = styled.img`
  max-width: 300px;
  border-radius: 8px;
`;

export const FilmDescription = styled.div`
margin-left: 15px;
  max-width: 300px;
  padding: 20px;
 background-color: rgba(74, 20, 140, 0.7);
  border-radius: 8px;
`;

export const FilmTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 10px;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #fff;
  margin: 10px 0;
`;

export const SubHeading = styled.h2`
  font-size: 1.5em;
  margin-top: 10px;
`;

export const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  p {
    background-color: #8a2be2;
    color: #fff;
    border-radius: 4px;
    padding: 5px 10px;
    margin: 5px;
  }
`;
