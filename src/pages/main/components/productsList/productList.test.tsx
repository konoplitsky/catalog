import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductsList } from "@/pages/main/components";
import { BrowserRouter } from "react-router-dom";

describe("ProductsList Component", () => {
  it("Рендерит список товаров", () => {
    const products = [
      {
        id: 1,
        name: "Футболка",
        colors: [
          {
            id: 1,
            name: "черный",
            images: ["/images/1/black_front.png", "/images/1/black_back.png"],
            price: "123.00",
            description: 'Описание для "Футболка черный"',
            sizes: [1, 2, 3],
            color: "#000000FF",
          },
        ],
      },
      {
        id: 2,
        name: "Майка",
        colors: [
          {
            id: 1,
            name: "желтый",
            images: ["/images/2/yellow_front.png", "/images/2/yellow_back.png"],
            price: "88.00",
            description: 'Описание для "Майка желтый"',
            sizes: [1, 2, 3, 4, 5],
            color: "#efcc0c",
          },
        ],
      },
    ];

    render(
      <BrowserRouter>
        <ProductsList products={products} />
      </BrowserRouter>,
    );

    expect(screen.getByText("Футболка")).toBeInTheDocument();
    expect(screen.getByText("Майка")).toBeInTheDocument();
  });

  it("Отображает пустой контейнер, если список товаров пуст", () => {
    render(<ProductsList products={[]} />);
    expect(screen.getByRole("list", { hidden: true })).toBeEmptyDOMElement();
  });
});
