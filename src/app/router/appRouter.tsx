import { createBrowserRouter, Outlet } from "react-router-dom";
import { appRoutes } from "./appRoutes.tsx";

export const appRouter = createBrowserRouter([
  {
    element: <Outlet />,
    children: appRoutes,
  },
]);
