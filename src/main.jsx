import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/pages/RootLayout";
import ModelProvider from "./context/ModelProvider";
import { lazy, StrictMode } from "react";
import SearchPage from "./components/pages/SearchPage";
const MovieDetail = lazy(() => import("./components/pages/MovieDetail"));
const TVShowDetail = lazy(() => import("./components/pages/TVShowDetail"));
const PeopleDetail = lazy(() => import("./components/pages/PeopleDetail"));
const HomePage = lazy(() => import("./components/pages/HomePage"));
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "tv/:id",
        element: <TVShowDetail />,
      },
      {
        path: "people/:id",
        element: <PeopleDetail />,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://api.themoviedb.org/3/person/${params.id}?append_to_response=combined_credits`,
            {
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
              },
            },
          );
          return res;
        },
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <ModelProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ModelProvider>,
);
