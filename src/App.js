import React from "react";
import  ReactDOM  from "react-dom";
import Header from "./Components/Header";
import Body from "./Components/Body"
import Footer from "./Components/Footer";
import Contact from "./Components/Pages/Contact";
import Error from "./Components/Pages/Error";
import About from "./Components/Pages/About";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, Router, RouterProvider, Outlet } from "react-router-dom";


const Home = () => {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  };
  
  const AppRoute = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Body />
        }, {
          path: "/about",
          element: <About />
        }, {
          path: "/contact",
          element: <Contact />
        },
        {
          path : "/restaurants/:resId",
          element : <RestaurantMenu />
        }
      ],
      errorElement: <Error />
    }
  ])
  
  const root = ReactDOM.createRoot(document.querySelector("#root"));
  root.render(<RouterProvider router={AppRoute} />);