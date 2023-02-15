import { useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          element: <h1> Home </h1>,
        },
        {
          path: "sale",
          element: <h1> Sale </h1>,
        },
        {
          path: "shop",
          element: <h1> Shop </h1>,
        },
        {
          path: "collection",
          element: <h1> Collection </h1>,
        },
        {
          path: "cart",
          element: <h1> cart </h1>,
        },
        {
          path: "login",
          element: <h1> login </h1>,
        },
        {
          path: "signup",
          element: <h1> signup </h1>,
        },
      ],
    },
  ]);

  return routes;
};

export default App;
