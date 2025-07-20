import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const calculateTotal = () =>
    cartItems
      .reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0)
      .toFixed(2);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        <p className="text-xl mb-4">Your cart is empty.</p>
        <Link
          to="/"
          className="mt-4 px-4 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-700 font-semibold"
        >
          Back to Items
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-10 py-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-950">Your Cart</h2>

      <div className="grid gap-6">
        {cartItems.map((item, index) => (
          <div
            key={`${item.id}-${item.size}-${index}`}
            className="flex flex-col md:flex-row items-center gap-6 bg-white p-4 rounded-xl shadow border border-gray-200"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Size:</span> {item.size}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    {item.description.slice(0, 60)}...
                  </p>
                </div>
                <p className="font-bold text-blue-900 text-right">Rs {item.price}</p>
              </div>

              <div className="flex items-center gap-2 mt-3">
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantity - 1, item.size)
                  }
                  disabled={item.quantity === 1}
                  className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 disabled:opacity-50"
                >
                  <FaMinus />
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantity + 1, item.size)
                  }
                  className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                >
                  <FaPlus />
                </button>
                <button
                  onClick={() => removeFromCart(item.id, item.size)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-right">
        <h4 className="text-xl font-semibold text-blue-900">
          Total: Rs {calculateTotal()}
        </h4>
        <div className="mt-4 flex flex-col sm:flex-row text-center justify-end gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-white text-blue-950 border-2 border-blue-950 rounded-lg hover:bg-blue-950 hover:text-white transition"
          >
            Back to Items
          </Link>
          <button
            onClick={() => {
              toast.success("🛍️ Order Placed Successfully!");
              navigate("/");
            }}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
