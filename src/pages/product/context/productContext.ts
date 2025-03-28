import { createContext } from "react";

export interface ProductContextProps {
  colorIndex: number;
  imageIndex: number;
  selectedSize: number | null;
  handleColorSelect: (index: number) => void;
  handlePrevImage: (currentColor: Colors) => void;
  handleNextImage: (currentColor: Colors) => void;
  handleSizeSelect: (sizeId: number, availableSizes: number[]) => void;
}

export const ProductContext = createContext<ProductContextProps>({
  colorIndex: 0,
  imageIndex: 0,
  selectedSize: null,
  handleColorSelect: () => {},
  handlePrevImage: () => {},
  handleNextImage: () => {},
  handleSizeSelect: () => {},
});
