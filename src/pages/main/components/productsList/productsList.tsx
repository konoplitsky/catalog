import styles from "./productsList.module.css";
import { ProductCard } from "../../components";

interface ProductsListProps {
  products: Products[];
}

export const ProductsList = ({ products }: ProductsListProps) => (
  <div className={styles.container}>
    {products?.map((product) => <ProductCard product={product} />)}
  </div>
);
