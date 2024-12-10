// "Use client"
// import React from 'react';
// import Image from 'next/image';
// import { BsCartDash } from "react-icons/bs";

// import product1 from '@/assets/Library Stool Chair 1.png';
// import product2 from '@/assets/Library Stool Chair 2.png';
// import product3 from '@/assets/Library Stool Chair 3.png';
// import product4 from '@/assets/Library Stool Chair 4.png';
// import product5 from '@/assets/Wing Chair.png';
// import product6 from '@/assets/Style Chair 3.png';
// import product7 from '@/assets/Library Sofa Chair.png';


// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   onSale: boolean;
//   isNew: boolean;
// };

// const products: Product[] = [
//   {id: 1, name: 'Library Stool Chair', price: 20, image: product1.src, onSale: false, isNew: true},
//   {id: 2, name: 'Library Stool Chair', price: 20, image: product2.src, onSale: true, isNew: false},
//   {id: 3, name: 'Library Stool Chair', price: 20, image: product3.src, onSale: false, isNew: false},
//   {id: 4, name: 'Library Stool Chair', price: 20, image: product4.src, onSale: false, isNew: false},
//   {id: 5, name: 'Wing Chair', price: 20, image: product5.src, onSale: false, isNew: true},
//   {id: 6, name: 'Library Stool Chair', price: 20, image: product6.src, onSale: true, isNew: false},
//   {id: 7, name: 'Library Stool Chair', price: 20, image: product7.src, onSale: false, isNew: false},
// ];

// const paths = products.map(product=>product.name.toString());
// const productInfo = products.filter(product=>paths.includes(product.name))

// interface ProductParams {
//   name: string;
// }

// export default function Product({ param }: ProductParams) {
//   const product = products.find((p) => p.name === param.name);

//   if (!product)return <div>Not found</div>
//   return (
//     <div>
//         {/* Product Information Section */}
//         <div>
//             {/* Left Image Section */}
//             <div>
//           <Image src={product.image} alt={product.name} width={500} height={500} />
//         </div>
//            {/* Right Product Information Section  */}
//             <div>

//             </div>
//         </div>
//         {/* Featured Products Section */}
//         <div>

//         </div>
//     </div>
//   )
// }
