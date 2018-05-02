/*
    operator ? for optional fields
 */
export interface CartItem {
  pid: number;
  quantity: number;
  name?: string;
  price?: number;
  stock?: number;
}

export interface Order{   
    orderNumber?: number;
    date?: string;
    products: CartItem[];
    totalPrice?: number;
    status: string;
    shipping: Address;
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
    addr_2?: string;
    state: string;
    city: string;
    zip: number;
    phone: number;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    stock?: number;
    desc?: string;
    img?: string;
  }
  