import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PropertyDetails from '../Pages/PropertyDetails';
import PrivateRouter from './PrivateRouter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        path: "/properties/:id",
        element: (
          <PrivateRouter>
            <PropertyDetails></PropertyDetails>
          </PrivateRouter>
        ),
        loader: ()=>fetch('/properties.json')
      },
    ],
  },
]);

export default router