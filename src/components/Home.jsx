import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Hero from "./Hero";
import Items from "./Items";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import FAQ from "./FAQ.jsx";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", to: "home", type: "scroll" },
    { name: "Shop", to: "items", type: "scroll" },
    { name: "FAQ's", to: "faq", type: "scroll" },
    { name: "Cart", to: "/cart", type: "route" },
    { name: "Contact", to: "contact", type: "scroll" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <RouterLink to="/" className="text-3xl font-semibold text-gray-900 tracking-tight">
            &lt;My<span className="text-blue-900">Shop</span>/&gt;
          </RouterLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6 text-blue-900 text-base font-medium">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.type === "scroll" ? (
                    <ScrollLink
                      to={item.to}
                      smooth={true}
                      duration={800}
                      offset={-60}
                      className="cursor-pointer group relative inline-block text-blue-900 hover:text-blue-600 transition-colors duration-300"
                    >
                      {item.name}
                      <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      to={item.to}
                      className="group relative inline-block text-blue-900 hover:text-blue-600 transition-colors duration-300"
                    >
                      {item.name}
                      <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </RouterLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-blue-900">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <nav className="md:hidden bg-white/70 backdrop-blur-lg border-t border-white/30 px-6 py-4">
            <ul className="space-y-4 text-blue-900 text-base font-medium">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.type === "scroll" ? (
                    <ScrollLink
                      to={item.to}
                      smooth={true}
                      duration={600}
                      offset={-60}
                      onClick={closeMenu}
                      className="block cursor-pointer hover:text-indigo-600 transition-colors duration-300"
                    >
                      {item.name}
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      to={item.to}
                      onClick={closeMenu}
                      className="block hover:text-indigo-600 transition-colors duration-300"
                    >
                      {item.name}
                    </RouterLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Sections with IDs for scroll targets */}
      <section id="home">
        <Hero />
      </section>
      <section id="items">
        <Items />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
