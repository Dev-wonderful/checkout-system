export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string
}

export type Quantity = {
  id: number,
  value: number
}

export type quantityFunc = (itemQuantity: Quantity) => void
