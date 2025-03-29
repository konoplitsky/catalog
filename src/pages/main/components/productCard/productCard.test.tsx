import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ProductCard } from "@/pages/main/components";

describe("ProductCard Component", () => {
  it("Отображает название и изображение товара", () => {
    const product = {
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
    };

    render(
      <BrowserRouter>
        <ProductCard product={product} />
      </BrowserRouter>,
    );

    expect(screen.getByText("Футболка")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "/images/1/black_front.png",
    );
  });
});
