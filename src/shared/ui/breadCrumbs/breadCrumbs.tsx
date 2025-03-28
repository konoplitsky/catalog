import { ReactNode } from "react";
import { Item } from "@/shared/ui/breadCrumbs/ui/item/item.tsx";

import styles from "./breadCrumbs.module.css";

interface BreadcrumbsProps {
  children?: ReactNode;
}

export const Breadcrumbs = ({ children }: BreadcrumbsProps) => {
  return <div className={styles.bread_crumbs}>{children}</div>;
};

Breadcrumbs.Item = Item;
