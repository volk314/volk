export default interface User{
    email: string;
    password: string;
}

export interface Product {
    url: string;
    color: string | null;
    size: string | null;
}