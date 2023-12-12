import { ActorItem, ActorList, NoCastInfo } from "./Cast.styled"
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getCast } from "services/api";
import Notification from "components/Notification/Notification";
import defaultActor from '../../images/default-actor.jpg';

const Actor = () => {
  const { movieId } = useParams();
  const [filmCast, setFilmCast] = useState([]);

  useEffect(() => {
    const fetchActorData = async () => {
      try {
        const response = await getCast(movieId);
        setFilmCast(response.cast);
      } catch ({ message }) {
        Notification(message)
      }
    };

    fetchActorData();
  }, [movieId]);

  return (
    <ActorList>
      {filmCast.length > 0 ? (
        filmCast.map(actor => (
          <ActorItem key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : defaultActor
              }
              alt={actor.name}
            />
            <h1>{actor.name}</h1>
            <h3>Character: {actor.character}</h3>
          </ActorItem>
        ))
      ) : (
        <NoCastInfo>No Cast information available</NoCastInfo>
      )}
    </ActorList>
  );
};

export default Actor;