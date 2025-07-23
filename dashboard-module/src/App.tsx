import type React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./routes";
import "@sigla-web/ui/globals.css";

const router = createBrowserRouter(routes);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
