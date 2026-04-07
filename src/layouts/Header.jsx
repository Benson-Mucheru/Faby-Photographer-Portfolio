import { useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="sticky top-0 bg-white z-3">
      <header className="flex justify-between items-center px-8 py-2 relative">
        <div className="flex gap-2 items-center">
          <img
            src={logo}
            alt="logo"
            className="size-9 border-1 border-gray-500/40 rounded-full p-0.5"
          />
          <h2>Logo Name</h2>
        </div>

        <ul className="hidden md:flex gap-2">
          <li>Gallary</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <ul
          className={
            isOpen
              ? "absolute bg-white top-0 left-0 w-1/2 h-screen border visible pt-4 pl-4 transition-all duration-300"
              : "absolute bg-white top-0 left-0 w-[0%] h-screen border invisible pt-4 pl-0 transition-all duration-300"
          }
        >
          <li onClick={toggleMenu}>Gallary</li>
          <li onClick={toggleMenu}>About</li>
          <li onClick={toggleMenu}>Contact</li>
        </ul>

        <button className="md:hidden" onClick={toggleMenu}>
          menu
        </button>
      </header>
    </nav>
  );
}
