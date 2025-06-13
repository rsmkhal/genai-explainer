import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
const navItems = [
  {
    name: "Introduction",
    path: "/introduction",
  },
  {
    name: "Generative Models",
    path: "/generative-models",
  },
  {
    name: "Dataset Origins",
    path: "/dataset-origins",
  },
  {
    name: "Captioning",
    path: "/captioning",
  },
  {
    name: "Model Architectures",
    path: "/model-architectures",
  },
  {
    name: "Prompt Demo",
    path: "/prompt-demo",
  },
  {
    name: "Model Comparison",
    path: "/model-comparison",
  },
  {
    name: "Prompt Engineering",
    path: "/prompt-engineering",
  },
  {
    name: "Ethics",
    path: "/legal-ethical",
  },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActivePath = (path: string) => {
    const currentPath = location.pathname.replace(/^\//, "");
    const itemPath = path.replace(/^\//, "");
    return currentPath === itemPath;
  };
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center mr-8">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">
                Text-to-Image AI
              </span>
            </Link>
          </div>
          <div className="hidden md:ml-6 md:flex md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActivePath(item.path) ? "border-b-2 border-indigo-500 text-gray-900" : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActivePath(item.path) ? "bg-indigo-50 border-indigo-500 text-indigo-700" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
