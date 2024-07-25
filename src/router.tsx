import { To, createBrowserRouter, NavigateOptions } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";

const router = {
  getRouter: () => browserRouter,
  getLocation: () => browserRouter.state.location,
  navigate: (to: To | null, opts?: NavigateOptions) => browserRouter.navigate(to, opts),
};

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
