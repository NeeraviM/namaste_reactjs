import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// Components
import Header from "../src/components/Header";
import Body from "../src/components/Body";
// import About from "../src/components/About";
// import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

// Lazy loading the below modules
// console.log(extractedData);
const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const About = lazy(() => {
  return import("./components/About");
});

const Contact = lazy(() => {
  return import("./components/Contact");
});

const AppLayout = () => {
  console.log(<Body />);
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Grocery Loading</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Grocery Loading</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Grocery Loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <PageNotFound />,
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },

  // {
  //   path: "*",
  //   element: <PageNotFound/>
  // }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout/>);
