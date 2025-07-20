import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

const Product = () => {
  const { selectedProduct } = useContext(ProductContext);
  // const { addToCart } = useContext(CartContext);
  const [mainImage, setMainImage] = useState(selectedProduct?.image);
  const [selectedSize, setSelectedSize] = useState(null);
  const { cartItems, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  if (!selectedProduct) {
    return (
      <div className="text-center py-10 text-red-500">
        No product selected. Go back to items.
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size before adding to cart!");
      return;
    }

    const success = addToCart(selectedProduct, selectedSize);

    if (!success) {
      toast.error("This product with selected size is already in the cart.");
      return;
    }

    toast.success(`Added ${selectedProduct.name} (Size: ${selectedSize}) to cart!`);
    setTimeout(() => navigate("/cart"), 500);
  };

  return (
    <div className="container mx-auto py-6 px-4 md:px-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Image and Thumbnails */}
        <div className="flex flex-col-reverse sm:flex-row gap-4 lg:w-1/2">
          <div className="flex sm:flex-col gap-2 sm:gap-4 justify-center">
            {selectedProduct.thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border cursor-pointer transition 
                  ${mainImage === thumb ? "border-blue-500" : "border-gray-300 hover:border-blue-500"}`}
                onClick={() => setMainImage(thumb)}
              />
            ))}
          </div>
          <div className="flex-1">
            <img
              src={mainImage}
              alt={selectedProduct.name}
              className="w-[300px] max-w-md mx-auto h-auto object-cover rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 text-blue-900">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{selectedProduct.name}</h1>
          <p className="text-lg md:text-xl font-semibold mb-2">Rs {selectedProduct.price}</p>
          <p className="mb-6 text-gray-700 leading-relaxed">{selectedProduct.description}</p>
          <p className="mb-2 text-sm text-gray-600">
            <span className="font-semibold">Category:</span> {selectedProduct.category}
          </p>

          {/* Sizes */}
          <div className="mb-6">
            <p className="font-semibold mb-1">Available Sizes:</p>
            <div className="flex gap-2 flex-wrap">
              {selectedProduct.sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-3 py-1 rounded-full text-sm transition-all duration-200 
                    ${selectedSize === size
                      ? "bg-blue-900 text-white border-blue-900"
                      : "border-blue-900 text-blue-900"}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-white text-blue-950 border-2 border-blue-950 px-6 py-3 rounded-xl 
              hover:bg-blue-950 hover:text-white transition-all duration-300 shadow"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
