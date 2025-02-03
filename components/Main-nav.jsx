"use client";
import { Menu, Search } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position and toggle the isScrolled state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-white text-black" : "bg-black text-white"
      } sticky top-0 z-10 p-6 flex items-center justify-between transition-all duration-300`}
    >
      <div className="text-xl font-bold">InFolio</div>
      <ul className="hidden md:flex gap-6 uppercase text-sm">
        {[
          "Home",
          "Pages ▾",
          "Portfolio ▾",
          "Showcases ▾",
          "Blogs ▾",
          "Contact Us",
        ].map((item, index) => (
          <li
            key={index}
            className="cursor-pointer relative group hover:underline hover:underline-offset-4 hover:decoration-green-500 hover:text-white"
          >
            {item}
            {/* Dropdown menu */}
            {(item === "Pages ▾" || item === "Portfolio ▾") && (
              <ul className="absolute left-0 top-full bg-white text-black w-48 mt-6 opacity-0 group-hover:opacity-100 transition-opacity border-t-2 border-green-500">
                <li className="px-4 py-2 hover:bg-gray-200">Sub Item 1</li>
                <li className="px-4 py-2 hover:bg-gray-200">Sub Item 2</li>
                <li className="px-4 py-2 hover:bg-gray-200">Sub Item 3</li>
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <Search className="cursor-pointer" />
        <Menu
          className="cursor-pointer md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white p-4 md:hidden">
          <ul className="flex flex-col gap-4 text-center">
            {[
              "Home",
              "Pages ▾",
              "Portfolio ▾",
              "Showcases ▾",
              "Blogs ▾",
              "Contact Us",
            ].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer relative group hover:underline hover:underline-offset-4 hover:decoration-green-500 hover:text-white"
              >
                {item}
                {/* Dropdown menu for mobile */}
                {(item === "Pages ▾" || item === "Portfolio ▾") && (
                  <ul className="absolute left-0 top-full bg-white text-black w-48 mt-6 opacity-0 group-hover:opacity-100 transition-opacity border-t-2 border-green-500">
                    <li className="px-4 py-2 hover:bg-gray-200">Sub Item 1</li>
                    <li className="px-4 py-2 hover:bg-gray-200">Sub Item 2</li>
                    <li className="px-4 py-2 hover:bg-gray-200">Sub Item 3</li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
