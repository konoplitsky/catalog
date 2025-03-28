interface Sizes {
  id: number;
  label: string;
  number: number;
}

interface Products {
  id: number;
  name: string;
  colors: Colors[];
}

interface Colors {
  id: number;
  name: string;
  images: string[];
  price: string;
  description: string;
  sizes: number[];
  color: string;
}
