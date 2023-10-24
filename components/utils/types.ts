type removeProductCartFunc = (product: Product, quantity: Quantity) => void;

export type quantityFunc = (itemQuantity: Quantity) => void;
export type statelessFunction = () => void

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

export interface CartItemPropType {
  readonly item: Product;
  readonly itemQuantity: Quantity;
  onCartQtyIncrement: quantityFunc;
  onCartQtyDecrement: quantityFunc;
  onRemove: removeProductCartFunc;
}


