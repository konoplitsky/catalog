import { useQuery } from "@/shared/hooks";
import { getSizes } from "@/services/api";

export const useSizesQuery = () => {
  return useQuery(() => getSizes());
};
