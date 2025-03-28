const sizes: Sizes[] = [
  { id: 1, label: "XS", number: 44 },
  { id: 2, label: "S", number: 46 },
  { id: 3, label: "M", number: 48 },
  { id: 4, label: "L", number: 50 },
  { id: 5, label: "XL", number: 52 },
];

const products: Products[] = [
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
      {
        id: 2,
        name: "белый",
        images: ["/images/1/white_front.png", "/images/1/white_back.png"],
        price: "125.00",
        description: 'Описание для "Футболка белый"',
        sizes: [1, 2, 3, 4, 5],
        color: "#ffffff",
      },
      {
        id: 3,
        name: "серый",
        images: ["/images/1/gray_front.png", "/images/1/gray_back.png"],
        price: "120.00",
        description: 'Описание для "Футболка серый"',
        sizes: [],
        color: "#888888",
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
      {
        id: 2,
        name: "синий",
        images: ["/images/2/blue_front.png", "/images/2/blue_back.png"],
        price: "89.00",
        description: 'Описание для "Майка синий"',
        sizes: [2],
        color: "#1F5FE8FF",
      },
      {
        id: 3,
        name: "черный",
        images: ["/images/2/black_front.png", "/images/2/black_back.png"],
        price: "90.00",
        description: 'Описание для "Майка черный"',
        sizes: [],
        color: "#000000",
      },
    ],
  },
];

export function getSizes(): Promise<Sizes[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(sizes), 250);
  });
}

export function getProducts(): Promise<Products[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 250);
  });
}

export function getProduct(id: number): Promise<Products> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((product) => product.id === id);
      if (product) {
        resolve(product);
      } else {
        reject(new Error("Product not found"));
      }
    }, 250);
  });
}
