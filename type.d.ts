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
    inventory?: number;
    slug: number;
  }
  
  interface CategoryType {
    id: string;
    name: string;
    image: string;
    products: string;
  }


// For CartContext.tsx
 type CartItem = {
   id: string;
   name: string;
   price: number;
   quantity: number;
   image: string;
 };
 
 type CartContextType = {
  cart: CartItem[];
  cartItems: CartItem[]; // Add this line
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
};