import { Link } from "react-router-dom";

import styles from "./productCard.module.css";

interface ProductCardProps {
  product: Products;
}

export const ProductCard = ({ product }: ProductCardProps) => (
  <Link className={styles.productCard} to={`product/${product.id}`}>
    {product.colors[0]?.images[0] && (
      <img
        className={styles.img}
        src={product.colors[0].images[0]}
        alt={product.name}
      />
    )}
    <p className={styles.link}>{product.name}</p>
  </Link>
);
