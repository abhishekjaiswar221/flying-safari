import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from "./pages/HomePage";

const App = () => {
  const routes = createBrowserRouter([
    {
      index: true,
      Component: HomePage,
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
