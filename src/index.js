import React from 'react';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar/>
        <Outlet/>
      </>
    ),
    errorElement: <p>Page Not Found</p>,
    children: [
      {
      path: "/",
      element: <Home/>,
      },
      
  ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
