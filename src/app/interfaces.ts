export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
  price: number; /* can be deleted */
}

export interface Order{
    products: CartItem[];
    total_prices: number;
    status: string;
    date: string;
    orderNumber: string;
}

export interface User{
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    address: Address;
}

export interface Address{
    addr_1: string;
    addr_2: string;
    state: string;
    city: string;
    zip: number;
    phone: number;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    desc: string;
    img: string;
  }
  