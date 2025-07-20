import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { Menu, X } from "lucide-react"; // optional icon library

const products = [
  {
    id: 1,
    name: "PLAIN SHIRT",
    price: "3999",
    image: "/images/men1.jpg",
    description: "A new button down shirt for men",
    category: "Men's Fashion",
    sizes: ["S", "M", "L", "XL"],
    thumbnails: ["/images/men1t1.jpg", "/images/men1t2.jpg", "/images/men1t3.jpg"],
  },
  {
    id: 2,
    name: "STRIPED SHIRT",
    price: "3490",
    image: "/images/men2.jpg",
    description: "A new Striped shirt for men",
    category: "Men's Fashion",
    sizes: ["S", "M", "L", "XL"],
    thumbnails: ["/images/men2t2.jpg", "/images/men2t3.jpg", "/images/men2t1.jpg"],
  },
  {
    id: 3,
    name: "CHECKERED SHIRT",
    price: "3490",
    image: "/images/men3.jpg",
    description: "Checked shirt for men",
    category: "Men's Fashion",
    sizes: ["S", "M", "L", "XL"],
    thumbnails: ["/images/men3t1.jpg", "/images/men3t2.jpg", "/images/men3t3.jpg"],
  },
  {
    id: 4,
    name: "LOW-TOP SNEAKERS",
    price: "4999",
    image: "/images/men5.jpg",
    description: "Elevate your everyday look with our stylish Low-Top Sneakers. With a secure lace up fastening and a chunky sole, these sneakers not only offer a casual and comfortable fit, but also add a trendy touch to any outfit. Upgrade your shoe game and stay on the go with our versatile Low-Top Sneakers.",
    category: "Men's Fashion",
    sizes: ["S", "M", "L", "XL"],
    thumbnails: ["/images/men5t1.jpg", "/images/men5t2.jpg", "/images/men5t3.jpg"],
  },
  {
    id: 5,
    name: "STRAIGHT JEANS",
    price: "3390",
    image: "/images/men4.jpg",
    description: "A new pair of straight jeans for men",
    category: "Men's Fashion",
    sizes: ["S", "M", "L", "XL"],
    thumbnails: ["/images/men4t1.jpg", "/images/men4t2.jpg", "/images/men4t3.jpg"],
  },
  {
    id: 6,
    name: "EMBROIDERED SHIRT",
    price: "3499",
    image: "/images/women1.jpg",
    description: "Elegant embroidered shirt for women. Breathable, and versatile — our women’s tops effortlessly blend fashion with function for every occasion.",
    category: "Women's Fashion",
    sizes: ["S", "M", "L", "XL"],
    thumbnails: ["/images/women1t1.jpg", "/images/women1t2.jpg", "/images/women1t3.jpg"],
  },
  {
    id: 7,
    name: "STRAIGHT TROUSERS WITH SLIT",
    price: "4490",
    image: "/images/women2.jpg",
    description: "These Straight Trousers will elevate your wardrobe with a playful twist. Featuring a stylish slit detail, these basic trousers are perfect for any occasion. Say goodbye to boring pants and hello to a quirky and fun addition to your wardrobe.",
    category: "Women's Fashion",
    sizes: ["S", "M", "L", "XL"],
    thumbnails: ["/images/women2t1.jpg", "/images/women2t2.jpg", "/images/women2t3.jpg"],
  },
  {
    id: 8,
    name: "ESPADRILLE FLATS",
    price: "2999",
    image: "/images/women3.jpg",
    description: "Step into summer with these trendy espadrille flats! Perfect for a day out on the town or a casual picnic, these flats feature a classic espadrille design for a touch of boho-chic. Lightweight and comfortable, these flats are a must-have for any fashion-forward individual.",
    category: "Women's Fashion",
    sizes: ["S", "M", "L", "XL"],
    thumbnails: ["/images/women3t1.jpg", "/images/women3t2.jpg", "/images/women3t3.jpg"],
  },
  {
    id: 9,
    name: "RESORT COLLAR DENIM SHIRT",
    price: "2999",
    image: "/images/kid1.jpg",
    description: "Soft, fun, and built for play — our kids’ shirts keep them comfy while showing off their favorite colors and prints.",
    category: "Kid's Fashion",
    sizes: ["6-8Y", "8-10Y", "10-12Y", "12-14Y"],
    thumbnails: ["/images/kid1t1.jpg", "/images/kid1t2.jpg", "/images/kid1t3.jpg"],
  },
  {
    id: 10,
    name: "NON-DENIM GUNGAREE",
    price: "2399",
    image: "/images/kid2.jpg",
    description: "Rock a unique look with our quirky Non-Denim Dungaree! With a front bib pocket and button straps, this versatile piece will keep you stylish and organized. Plus, the back 2 patch pockets provide extra storage for all your essentials. Say goodbye to boring denim and hello to a fun and functional outfit!",
    category: "Kid's Fashion",
    sizes: ["6-8Y", "8-10Y", "10-12Y", "12-14Y"],
    thumbnails: ["/images/kid2t1.jpg", "/images/kid2t2.jpg", "/images/kid2t3.jpg"],
  },
  {
    id: 11,
    name: "ALL-OVER BOW TIE PRINTED T-SHIRT",
    price: "2499",
    image: "/images/kid3.jpg",
    description: "Channel your inner quirky with our All-Over Bow Tie Printed T-Shirt. Featuring a textured design, crew neck, and short sleeves, this tee is perfect for adding a touch of fun to any outfit. No need to worry about tying a bow tie--we've got you covered! ",
    category: "Kid's Fashion",
    sizes: ["6-8Y", "8-10Y", "10-12Y", "12-14Y"],
    thumbnails: ["/images/kid3t1.jpg", "/images/kid3t2.jpg", "/images/kid3t3.jpg"],
  },
];

const categories = ["All", "Men's Fashion", "Women's Fashion", "Kid's Fashion"];
const priceRanges = [
  { label: "All", value: "all" },
  { label: "Under Rs 2500", value: "under-2500" },
  { label: "Rs 3500 - Rs 3999", value: "3500-3999" },
  { label: "Above Rs 3999", value: "above-3999" },
];

const Items = () => {
  const { setSelectedProduct } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const handleClick = (product) => {
    setSelectedProduct(product);
  };

  const filteredProducts = products.filter((product) => {
    const matchCategory = selectedCategory === "All" || product.category === selectedCategory;
    const price = parseInt(product.price);
    let matchPrice = true;
    if (selectedPrice === "under-2500") matchPrice = price < 2500;
    else if (selectedPrice === "3500-3999") matchPrice = price >= 3500 && price <= 3999;
    else if (selectedPrice === "above-3999") matchPrice = price > 3999;
    return matchCategory && matchPrice;
  });

  return (
    <div
      id="/items"
    >
      <div className="max-w-7xl mx-auto px-4 py-10 relative">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-blue-900">Featured Products</h1>

          <button
            className=" p-2 rounded-md bg-white text-blue-900 transition"
            onClick={() => setShowFilters(true)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Off-Canvas Filter Panel */}
        <div
          className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${showFilters ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold text-blue-950">Filters</h2>
            <button onClick={() => setShowFilters(false)} className="text-gray-700 hover:text-red-500">
              <X size={22} />
            </button>
          </div>

          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Category</h3>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`block w-full text-left px-3 py-2 rounded-md mb-1 ${selectedCategory === cat
                  ? "bg-blue-100 text-blue-900 font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
                  }`}
              >
                {cat}
              </button>
            ))}

            <h3 className="mt-4 text-sm font-medium text-gray-700 mb-2">Price</h3>
            {priceRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => setSelectedPrice(range.value)}
                className={`block w-full text-left px-3 py-2 rounded-md mb-1 ${selectedPrice === range.value
                  ? "bg-blue-100 text-blue-900 font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
                  }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                to={`/product/${product.id}`}
                onClick={() => handleClick(product)}
                key={product.id + product.name}
                className="group relative mx-auto w-full max-w-[320px] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-md bg-white"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[380px] object-cover transition-transform duration-300"
                />
                <div className="absolute bottom-0 w-full px-4 py-3 bg-gradient-to-t from-black/40 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300">

                  <h2 className="text-lg font-semibold text-blue-900 truncate">{product.name}</h2>
                  <p className="text-sm text-gray-200">Rs {product.price}</p>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600 text-lg">
              No products match your filters.
            </div>
          )}
        </div>

      </div>

      {/* Decorative SVG */}
      <div className="relative text-blue-950">
        <svg
          className="w-full h-24 md:h-32 lg:h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,117.3C840,96,960,96,1080,106.7C1200,117,1320,139,1380,149.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Items;
