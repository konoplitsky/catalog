import { ReactNode } from "react";

import { URLS } from "./urls.ts";
import { ProductLazy } from "@/pages/product/product.lazy.tsx";
import { MainLazy } from "@/pages/main/main.lazy.tsx";

interface Route {
  path: string;
  element: ReactNode;
}

export const appRoutes: Route[] = [
  {
    path: URLS.MAIN,
    element: <MainLazy />,
  },
  {
    path: URLS.PRODUCT,
    element: <ProductLazy />,
  },
];
