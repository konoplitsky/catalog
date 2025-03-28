import { useQuery } from "@/shared/hooks";
import { getProducts } from "@/services/api.ts";

export const useGetProductsQuery = () => {
  return useQuery(getProducts);
};
