import { createHashRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portofolio from "./pages/Portofolio";
import NotFound from "./pages/NotFound";
import WebsiteProfilePertama from "./pages/portofolio/WebsiteProfilePertama";
import WebPortofolio from "./pages/portofolio/WebPortofolio";
import WebsiteCrud from "./pages/portofolio/WebsiteCrud";
import WebHotel from "./pages/portofolio/WebHotel";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/portofolio",
        element: <Portofolio />,
      },
      {
        path: "/portofolio/websitepertama",
        element: <WebsiteProfilePertama />,
      },
      {
        path: "/portofolio/webprofile",
        element: <WebPortofolio />,
      },
      {
        path: "/portofolio/websitecrud",
        element: <WebsiteCrud />,
      },
      {
        path: "/portofolio/webhotel",
        element: <WebHotel />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
