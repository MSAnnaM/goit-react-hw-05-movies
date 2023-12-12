import {
    PageNotFoundWrapper,
    PageNotFoundMsg,
    HomePageLink,
} from './NotFound.styled';
import { useLocation } from 'react-router-dom';

const PageNotFound = () => {
    const { urlPath } = useLocation();

    return (
        <PageNotFoundWrapper>
            <PageNotFoundMsg>
                The page {urlPath} doesn't exist!
            </PageNotFoundMsg>
            <HomePageLink to={'/'}>Go back to the Home Page</HomePageLink>
        </PageNotFoundWrapper>
    );
};

export default PageNotFound;