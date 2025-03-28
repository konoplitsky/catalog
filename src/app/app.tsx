import { RouterProvider } from "react-router-dom";
import { appRouter } from "./router/appRouter.tsx";

export const App = () => <RouterProvider router={appRouter} />;
