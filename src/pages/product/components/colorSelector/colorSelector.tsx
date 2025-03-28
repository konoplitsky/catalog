import { cn } from "@/shared/lib/cn";
import styles from "./colorSelector.module.css";
import { useProduct } from "../../context/useProduct.ts";

interface ColorSelectorProps {
  colors: Colors[];
}

export const ColorSelector = ({ colors }: ColorSelectorProps) => {
  const { colorIndex, handleColorSelect } = useProduct();

  return (
    <div className={styles.colorSelector}>
      {colors.map((color, index) => (
        <div
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
