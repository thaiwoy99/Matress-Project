 export interface dataObj {
    products:prodProp[]
 }
 export interface MatressObj {
  product:Mattress
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

  // Matress type
   export interface Mattress {
    id: number;
    name: string;
    stars: number;
    category_id: number;
    description: string;
    created_at: string;
    updated_at: string;
    sizes: Size[];
    pictures: Picture[];
}

interface Size {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    pivot: Pivot;
}

interface Pivot {
    product_id: number;
    size_id: number;
    price: string;
    created_at: string;
    updated_at: string;
}

interface Picture {
    id: number;
    product_id: number;
    image_path: string;
    created_at: string;
    updated_at: string;
}

  