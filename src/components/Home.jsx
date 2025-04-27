import React from "react";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$19.99",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$29.99",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$39.99",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    name: "Product 4",
    price: "$49.99",
    image: "https://via.placeholder.com/300",
  },
];

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold">MyShop</div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-8 px-6">
        <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="mt-2 text-gray-700">{product.price}</p>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-white text-center p-4 mt-8">
        © 2023 MyShop. All rights reserved.
      </footer>
    </div>
   
  );
};

export default Home;
