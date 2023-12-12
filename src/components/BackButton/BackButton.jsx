import { GoBackLink } from './BackButton.styled';

const GoBackBtn = ({ path }) => {
  return <GoBackLink to={path}>Go back</GoBackLink>;
};

export default GoBackBtn;