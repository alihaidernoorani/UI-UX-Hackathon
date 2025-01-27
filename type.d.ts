interface InstagramProductType {
  id: string; 
  image: string;
  }
  
  interface ProductType {
    id: string;
    name: string;
    price: number;
    onSale: boolean;
    isNew: boolean;
    image: string;
    description?: string;
    category?: string;
    slug: number;
  }
  
  interface CategoryType {
    id: string;
    name: string;
    image: string;
    products: string;
  }