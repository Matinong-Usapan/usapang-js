import './App.css';
import NavWrapper from './components/NavWrapper';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from './components/pages/Dashboard';
import NotFound from './components/pages/NotFound';
import UserProfile from './components/pages/UserProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavWrapper />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/user",
        element: <UserProfile />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;