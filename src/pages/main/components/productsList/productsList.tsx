import styles from "./productsList.module.css";
import { ProductCard } from "../../components";

interface ProductsListProps {
  products: Products[];
}

export const ProductsList = ({ products }: ProductsListProps) => (
  <ul className={styles.container}>
    {products?.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </ul>
);
