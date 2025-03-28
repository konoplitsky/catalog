import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "../../../../icons/ArrowLeftIcon.tsx";

import styles from "../../breadcrumbs.module.css";

interface ItemProps {
  children: ReactNode;
  to: string;
}

export const Item = ({ children, to }: ItemProps) => (
  <Link to={to} className={styles.box}>
    <ArrowLeftIcon className={styles.icon} />
    <p className={styles.label}>{children}</p>
  </Link>
);
