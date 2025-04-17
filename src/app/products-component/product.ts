export class Product {
  id?: number;
  productName?: string;
  price?: number;
  quantity?: number;
  constructor(id?: number, productName?: string, price?: number, quantity?: number) {
    this.id = id;
    this.productName = productName || '';
    this.price = price;
    this.quantity = quantity;
  }
}
