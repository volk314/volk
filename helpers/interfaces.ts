export default interface User{
    email: string;
    password: string;
}

export interface Product {
    url: string;
    options: {
      color?: string;
      size?: string;
    } | null;
}