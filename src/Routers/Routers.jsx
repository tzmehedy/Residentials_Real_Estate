import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PropertyDetails from '../Pages/PropertyDetails';
import PrivateRouter from './PrivateRouter';
import ErrorPage from '../Pages/ErrorPage';
import Blogs from '../Pages/Blogs';
import Profile from '../Pages/Profile';
import EditProfile from '../Pages/EditProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/properties.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/properties/:id",
        element: (
          <PrivateRouter>
            <PropertyDetails></PropertyDetails>
          </PrivateRouter>
        ),
        loader: () => fetch("/properties.json"),
      },

      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <Profile></Profile>
          </PrivateRouter>
        ),
        children: [],
      },

      {
        path: "/editProfile",
        element: <EditProfile></EditProfile>,
      },
    ],
  },
]);

export default router