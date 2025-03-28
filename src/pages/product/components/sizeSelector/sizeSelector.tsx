import { cn } from "@/shared/lib/cn";
import styles from "./SizeSelector.module.css";
import { useProduct } from "@/pages/product/context/useProduct.ts";

interface SizeSelectorProps {
  sizes: Sizes[];
  availableSizes: number[];
}

export const SizeSelector = ({ sizes, availableSizes }: SizeSelectorProps) => {
  const { selectedSize, handleSizeSelect } = useProduct();

  return (
    <div className={styles.sizeSelector}>
      {sizes.map((size) => {
        const isAvailable = availableSizes.includes(size.id);
        return (
          <button
            key={size.id}
            className={cn(styles.sizeButton, {
              [styles.active]: selectedSize === size.id,
              [styles.disabled]: !isAvailable,
            })}
            onClick={() => handleSizeSelect(size.id, availableSizes)}
            disabled={!isAvailable}
          >
            {size.label}
          </button>
        );
      })}
    </div>
  );
};
