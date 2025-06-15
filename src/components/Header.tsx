// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";
// We no longer need to import Header.css!

function Header() {
  return (
    // position: sticky top-0
    // background-color:  bg-gray-900 (a dark Tailwind color)
    // padding: 1rem 0; -> py-4
    // width: 100%; -> w-full
    // z-index: 1000; -> z-50 (a high z-index in Tailwind)
    // display: flex; justify-content: center; align-items: center; -> flex justify-center items-center
    <header className="sticky top-0 bg-gray-900 py-4 w-full z-50 flex justify-center items-center">
      {/* display: flex; gap: 2rem; -> flex gap-8 */}
      <nav className="flex gap-8">
        {/*
          color: #e0e0e0; -> text-gray-200
          text-decoration: none; -> no-underline (though this is default for Link)
          font-size: 1.1rem; -> text-lg
          font-weight: 500; -> font-medium
          transition: ...; -> transition-colors duration-300
          :hover { color: ... } -> hover:text-blue-400
        */}
        <Link
          className="text-gray-200 font-medium text-lg transition-colors duration-300 hover:text-blue-400"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-gray-200 font-medium text-lg transition-colors duration-300 hover:text-blue-400"
          to="/about"
        >
          About
        </Link>
        <Link
          className="text-gray-200 font-medium text-lg transition-colors duration-300 hover:text-blue-400"
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className="text-gray-200 font-medium text-lg transition-colors duration-300 hover:text-blue-400"
          to="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
