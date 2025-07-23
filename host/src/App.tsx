import dashboardRoutes from "dashboard_module/routes";
import type React from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router";

const HomePage: React.FC = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Welcome to Host App</h1>
    <p className="text-gray-600 mb-6">This is the main host application.</p>
    <Link
      to="/dashboard"
      className="size-8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Go to Dashboard
    </Link>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  ...dashboardRoutes,
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
