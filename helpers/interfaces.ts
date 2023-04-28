export default interface User{
    email: string;
    password: string;
}

export interface Product2 {
    url: string;
    color: string | null;
    size: string | null;
}

export interface Product {
    url: string;
    options: {
      color?: string;
      size?: string;
    } | null;
}