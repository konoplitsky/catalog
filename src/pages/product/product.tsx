import { useParams } from "react-router-dom";
import { ColorSelector, ImageGallery, SizeSelector } from "./components";
import { useProductQuery, useSizesQuery } from "./api/hooks";
import { ProductProvider } from "./context/poductProvider.tsx";
import { useProduct } from "./context/useProduct.ts";

import { URLS } from "@/app/router/urls.ts";
import { Breadcrumbs } from "@/shared/ui/breadCrumbs/breadCrumbs.tsx";

import styles from "./product.module.css";

const ProductContent = () => {
  const params = useParams();
  const id = +(params.id as string);

  const productQuery = useProductQuery(id);
  const sizesQuery = useSizesQuery();
  const { colorIndex } = useProduct();

  const product = productQuery.data;
  const sizes = sizesQuery.data;

  if (productQuery.isLoading || sizesQuery.isLoading) {
    return <div>Загрузка...</div>;
  }

  if (!product || !sizes) {
    return <div>Ошибка загрузки данных</div>;
  }

  const currentColor = product.colors[colorIndex];

  return (
    <div className={styles.container}>
      <Breadcrumbs>
        <Breadcrumbs.Item to={URLS.MAIN}>Назад</Breadcrumbs.Item>
      </Breadcrumbs>
      <div className={styles.breadCrumbs}></div>
      <div className={styles.productInfo}>
        <ImageGallery currentColor={currentColor} />

        <div className={styles.productDetails}>
          <h1>{product.name}</h1>

          <ColorSelector colors={product.colors} />

          <SizeSelector sizes={sizes} availableSizes={currentColor.sizes} />

          <div>Цена: {currentColor.price}</div>
          <div className={styles.description}>{currentColor.description}</div>
        </div>
      </div>
    </div>
  );
};

const Product = () => {
  return (
    <ProductProvider>
      <ProductContent />
    </ProductProvider>
  );
};

export default Product;
