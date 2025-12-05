import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { NavWrapper } from './components';
import {
  Dashboard,
  NotFound,
  UserProfile,
  UserSettings,
  Sandbox,
} from './components/pages';

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
        path: "/user/settings",
        element: <UserSettings />,
      },
      {
        path: "/sandbox",
        element: <Sandbox />,
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