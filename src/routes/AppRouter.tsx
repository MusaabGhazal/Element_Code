import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import App from "../App";
import StudentsDaily from "../pages/StudentsDaily/StudentsDaily";
export const AppRouter = createBrowserRouter([
  {
    path: AppRoutes.home,
    element: <App></App>,
    children: [
      {
        path: AppRoutes.home,
        element: <div></div>,
        errorElement: <></>,
      },
      {
        path: "/studentsDaily",
        element: (
          <StudentsDaily/>
        ),
        errorElement: <></>,
      },
    ],
  },
  {
    path: AppRoutes.home,
    element: <div></div>,
    errorElement: <></>,
  },
]);
