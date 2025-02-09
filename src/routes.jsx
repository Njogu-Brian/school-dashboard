import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Courses from "./pages/Courses";
import NotFound from "./pages/NotFound"; // 404 Error Page

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />, // Handles any unknown routes
    children: [
      { path: "/", element: <Home /> },
      { path: "/students", element: <Students /> },
      { path: "/teachers", element: <Teachers /> },
      { path: "/courses", element: <Courses /> },
    ],
  },
]);

export default routes;
