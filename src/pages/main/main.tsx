import { ProductsList } from "./components";
import { useGetProductsQuery } from "./api/hooks";

import styles from "./main.module.css";

const Main = () => {
  const { data, isError, isLoading } = useGetProductsQuery();

  if (!data && isLoading) {
    return <div>Загрузка</div>;
  }

  if (!data && isError) {
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Список товаров</h1>
      <ProductsList products={data!} />
    </div>
  );
};

export default Main;
