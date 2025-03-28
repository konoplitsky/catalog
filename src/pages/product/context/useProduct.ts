import { useContext } from "react";
import { ProductContext } from "@/pages/product/context/productContext.ts";

export const useProduct = () => useContext(ProductContext);
