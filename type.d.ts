interface InstagramProductType {
  id: string; 
  image: string;
  }
  
interface ProductType {
  id: string;
  name: string;
  price: number;
  image: string;
  onSale: boolean;
  isNew: boolean;
}

interface CategoryType {
  title: string;
  image: string; 
  products: number; 
}