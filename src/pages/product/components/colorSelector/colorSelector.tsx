import { cn } from "@/shared/lib/cn";
import { useProduct } from "../../context/useProduct.ts";

import styles from "./colorSelector.module.css";

interface ColorSelectorProps {
  colors: Colors[];
}

export const ColorSelector = ({ colors }: ColorSelectorProps) => {
  const { colorIndex, handleColorSelect } = useProduct();

  return (
    <div className={styles.colorSelector}>
      {colors.map((color, index) => (
        <div
          key={color.id}
          className={styles.colorBox}
          onClick={() => handleColorSelect(index)}
        >
          <button
            key={color.id}
            className={cn(styles.colorButton, {
              [styles.active]: colorIndex === index,
            })}
            style={{ backgroundColor: color.color }}
          />
          <p>{color.name}</p>
        </div>
      ))}
    </div>
  );
};
