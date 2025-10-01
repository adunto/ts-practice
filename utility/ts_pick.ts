interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  inStock: boolean;
  category: string;
}

type ProductSummary = Pick<Product, "id" | "name" | "price">;

const productItem: ProductSummary = {
    id: "prod-123",
    name: "notebook",
    price: "1200000",
}
