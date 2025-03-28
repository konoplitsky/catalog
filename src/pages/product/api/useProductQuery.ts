import { useQuery } from "@/shared/hooks";
import { getProduct } from "@/services/api";

export const useProductQuery = (id: number) => {
  return useQuery(() => getProduct(id));
};
