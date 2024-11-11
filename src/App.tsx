import './App.css';
import Root from './pages/Root';
import HomePage from './pages/home/HomePage';
import SearchPage from './pages/search/SearchPage';
import DetailsPage from './pages/details/DetailsPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { searchLoader } from './pages/search/searchLoader';
import { detailsLoader } from './pages/details/detailsLoader';
import { homeloader } from './pages/home/homeLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeloader,
      },
      {
        path: 'search',
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        path: 'packages/:name',
        element: <DetailsPage />,
        loader: detailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
