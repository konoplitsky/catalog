import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useProductQuery, useSizesQuery } from "./api/hooks";
import { ProductProvider } from "./context/poductProvider.tsx";
import Product from "./product.tsx";

vi.mock("./api/hooks", () => ({
  useProductQuery: vi.fn(),
  useSizesQuery: vi.fn(),
}));

describe("Product Page", () => {
  const mockProduct = {
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
      {
        id: 2,
        name: "белый",
        images: ["/images/1/white_front.png", "/images/1/white_back.png"],
        price: "125.00",
        description: 'Описание для "Футболка белый"',
        sizes: [1, 2, 3, 4, 5],
        color: "#ffffff",
      },
    ],
  };

  const mockSizes = [
    { id: 1, label: "XS", number: 44 },
    { id: 2, label: "S", number: 46 },
    { id: 3, label: "M", number: 48 },
    { id: 4, label: "L", number: 50 },
    { id: 5, label: "XL", number: 52 },
  ];

  beforeEach(() => {
    (useProductQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      data: mockProduct,
    });
    (useSizesQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      data: mockSizes,
    });

    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <ProductProvider>
          <Product />
        </ProductProvider>
      </MemoryRouter>,
    );
  });

  it("Отображает корректные данные после загрузки", async () => {
    expect(await screen.findByText("Футболка")).toBeInTheDocument();
    expect(screen.getByText("Цена: 123.00")).toBeInTheDocument();
    expect(
      screen.getByText('Описание для "Футболка черный"'),
    ).toBeInTheDocument();
  });

  it("Переключает цвет товара", async () => {
    fireEvent.click(screen.getByText("белый"));

    await waitFor(() => {
      expect(screen.getByText("Цена: 125.00")).toBeInTheDocument();
      expect(
        screen.getByText('Описание для "Футболка белый"'),
      ).toBeInTheDocument();
    });
  });

  it("Переключает изображения", async () => {
    const nextButton = screen.getByTestId("ArrowRightIcon");
    const prevButton = screen.getByTestId("ArrowLeftIcon");

    expect(screen.getByAltText("черный")).toHaveAttribute(
      "src",
      "/images/1/black_front.png",
    );

    fireEvent.click(nextButton);
    expect(screen.getByAltText("черный")).toHaveAttribute(
      "src",
      "/images/1/black_back.png",
    );

    fireEvent.click(prevButton);
    expect(screen.getByAltText("черный")).toHaveAttribute(
      "src",
      "/images/1/black_front.png",
    );
  });

  it("Выбирает размер", async () => {
    const sizeButton = screen.getByText("M");
    fireEvent.click(sizeButton);

    await waitFor(() => {
      expect(sizeButton).toHaveAttribute("class");
      expect(sizeButton.className.includes("active")).toBe(true);
    });
  });
});
