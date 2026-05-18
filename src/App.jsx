import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./layout/AppLayout";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      Component: AppLayout,
      children: [
        {
          index: true,
          Component: HomePage,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
