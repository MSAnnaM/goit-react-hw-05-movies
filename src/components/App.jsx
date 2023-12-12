import { Routes, Route } from "react-router-dom";
import { lazy } from 'react'
import Layout from "./Layout/Layout";
import PageNotFound from "../components/NotFound/NotFound";

const HomePage = lazy(() => import('../pages/Home/Home'))
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const CastComponent = lazy(() => import('./Cast/Cast'))
const ReviewsComponent = lazy(() => import('./Reviews/Reviews'))

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />}></Route>
//         <Route path="movies/" element={<MoviesPage />}></Route>
//         <Route path="movies/:movieId" element={<MovieDetailsPage />} >
//           <Route path="cast" element={<CastComponent />} />
//           <Route path="reviews" element={<ReviewsComponent />} />
//         </Route>
//       </Route>
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="movies/" element={<Movies />}></Route>
        <Route path="movies/:movieId" element={<MovieDetailsPage />} >
          <Route path="cast" element={<CastComponent />} />
          <Route path="reviews" element={<ReviewsComponent />} />
        </Route>
        </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};