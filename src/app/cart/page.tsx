"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useCart } from "./context/CartContext";

const CartPage = () => {
  const cartContext = useCart();
  if (!cartContext) {
    return <div>Loading...</div>;
  }
  const { cart, updateQuantity, removeFromCart } = cartContext;

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl font-bold my-6 text-center hover:underline text-myDarkOrange">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-xl font-semibold text-center">Your Cart is Empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center border p-4 rounded-lg space-x-6"
              >
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-cover rounded-md"
                />
                <div className="flex-1">
                  <h2 className="font-semibold text-lg text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-gray-600">
                    Price: ${item.price.toFixed(2)}
                  </p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="font-bold text-gray-800">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 border rounded hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 border rounded hover:bg-gray-200"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="border p-6 rounded-lg bg-gray-100 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Summary</h2>
            <div className="flex justify-between text-lg text-gray-600">
              <p>Subtotal:</p>
              <p>${calculateTotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-lg text-gray-600">
              <p>Estimated Delivery:</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between text-xl font-bold text-gray-800">
              <p>Total:</p>
              <p>${calculateTotal().toFixed(2)}</p>
            </div>
            <button className="w-full py-3 bg-myDarkOrange text-white font-semibold rounded-lg hover:bg-orange-600">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
