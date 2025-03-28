import { ReactNode, useMemo, useState, useCallback } from "react";
import { ProductContext } from "../context/productContext.ts";

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [colorIndex, setColorIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const handleColorSelect = useCallback((index: number) => {
    setColorIndex(index);
    setImageIndex(0);
  }, []);

  const handlePrevImage = useCallback(
    (currentColor: Colors) => {
      if (imageIndex === 0) {
        setImageIndex(currentColor.images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    },
    [imageIndex],
  );

  const handleNextImage = useCallback(
    (currentColor: Colors) => {
      if (imageIndex === currentColor.images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    },
    [imageIndex],
  );

  const handleSizeSelect = useCallback(
    (sizeId: number, availableSizes: number[]) => {
      if (availableSizes.includes(sizeId)) {
        setSelectedSize(sizeId);
      }
    },
    [],
  );

  const value = useMemo(
    () => ({
      colorIndex,
      imageIndex,
      selectedSize,
      handleColorSelect,
      handlePrevImage,
      handleNextImage,
      handleSizeSelect,
    }),
    [
      colorIndex,
      imageIndex,
      selectedSize,
      handleColorSelect,
      handlePrevImage,
      handleNextImage,
      handleSizeSelect,
    ],
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
