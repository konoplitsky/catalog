import { useProduct } from "../../context/useProduct.ts";

import { ArrowRightIcon } from "@/shared/icons/ArrowRight.tsx";
import { ArrowLeftIcon } from "@/shared/icons/ArrowLeftIcon.tsx";

import styles from "./imageGallery.module.css";

interface ImageGalleryProps {
  currentColor: Colors;
}

export const ImageGallery = ({ currentColor }: ImageGalleryProps) => {
  const { imageIndex, handlePrevImage, handleNextImage } = useProduct();
  const currentImage = currentColor.images[imageIndex];

  return (
    <div className={styles.imageGallery}>
      <img
        src={currentImage}
        alt={currentColor.name}
        className={styles.mainImage}
      />
      <div className={styles.imageControls}>
        <ArrowLeftIcon
          className={styles.icons}
          onClick={() => handlePrevImage(currentColor)}
        />
        <ArrowRightIcon
          className={styles.icons}
          onClick={() => handleNextImage(currentColor)}
        />
      </div>
    </div>
  );
};
