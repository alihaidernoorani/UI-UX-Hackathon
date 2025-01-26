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
    category?: string;
  }
  
  interface CategoryType {
    id: string;
    name: string;
  }