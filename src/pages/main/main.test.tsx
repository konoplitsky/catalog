import { render, screen } from "@testing-library/react";
import Main from "./main.tsx";
import { useGetProductsQuery } from "./api/hooks";
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

vi.mock("./api/hooks", () => ({
  useGetProductsQuery: vi.fn(),
}));

describe("Main Component", () => {
  it("Отображает индикатор загрузки", () => {
    (useGetProductsQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
    });

    render(<Main />);
    expect(screen.getByText("Загрузка")).toBeInTheDocument();
  });

  it("Отображает сообщение об ошибке", () => {
    (useGetProductsQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    });

    render(<Main />);
    expect(screen.getByText("Ошибка загрузки данных")).toBeInTheDocument();
  });

  it("Отображает список товаров", () => {
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

    (useGetProductsQuery as jest.Mock).mockReturnValue({
      data: products,
      isLoading: false,
      isError: false,
    });

    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>,
    );
    expect(screen.getByText("Список товаров")).toBeInTheDocument();
    expect(screen.getByText("Футболка")).toBeInTheDocument();
    expect(screen.getByText("Майка")).toBeInTheDocument();
  });
});
