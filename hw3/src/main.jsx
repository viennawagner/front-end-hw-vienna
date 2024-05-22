import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from "react-router-dom"

import Home from './routes/Home';
import List from './routes/List';
import Error from './routes/Error';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

//Build the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/list",
    element: <List />,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);