import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { getReview } from "services/api"; 
import Notification from "components/Notification/Notification";
import {
  FeedbackWrapper,
  FeedbackList,
  FeedbackItem,
  FeedbackAuthor,
  FeedbackText,
  NoFeedbackMsg,
} from "./Reviews.styled";

const Feedback = () => {
  const { movieId } = useParams();

  const [filmReview, setFilmReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const retrieveReviews = async () => {
      try {
        const { results } = await getReview(movieId);
        setFilmReview(results);
      } catch ({ message }) {
        Notification(message);
      } finally {
        setIsLoading(false);
      }
    };

    retrieveReviews();
  }, [movieId]);

  return (
    <FeedbackWrapper id="feedbackWrapper">
      {isLoading && <Loader />}
      {filmReview.length > 0 ? (
        <FeedbackList>
          {filmReview.map(({ id, author, content }) => (
            <FeedbackItem key={id}>
              <FeedbackAuthor>
                {author}
              </FeedbackAuthor>
              <FeedbackText>{content}</FeedbackText>
            </FeedbackItem>
          ))}
        </FeedbackList>
      ) : (
        <NoFeedbackMsg>Sorry, no reviews</NoFeedbackMsg>
      )}
    </FeedbackWrapper>
  );
};

export default Feedback;