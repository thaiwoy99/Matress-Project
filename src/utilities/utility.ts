 export interface dataObj {
    products:prodProp[]
 }
 
 export interface prodProp {
    id: number;
    name: string;
    stars: number;
    category_id: number;
    description: string;
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
    prices: Price[];
    pictures: Picture[];
  }
  
  interface Price {
    id: number;
    product_id: number;
    size_id: number;
    price: string; // price as string to handle decimal values
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
    size: Size;
  }
  
  interface Size {
    id: number;
    name: string;
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
  }
  
  interface Picture {
    id: number;
    product_id: number;
    image_path: string;
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
  }
  