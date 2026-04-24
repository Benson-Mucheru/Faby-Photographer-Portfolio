import { useState } from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="sticky top-0 z-3 w-full bg-black/90 text-white backdrop-blur-md">
      <header className="flex justify-between items-center py-2 relative mx-auto max-w-350 not-md:px-1.5">
        <Link to="/">
          <h2
            className="font-bold font-sora text-2xl pt-3"
            style={{ lineHeight: 0.5 }}
          >
            Mr. Sololobo
          </h2>
          <h3 className="text-lg font-bold">PicZel Pictures</h3>
        </Link>

        <ul className="hidden md:flex gap-2">
          <button popoverTarget="gallaries" style={{ anchorName: "category" }}>
            Gallary
          </button>

          <ul
            className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
            popover="auto"
            id="gallaries"
            style={{ positionAnchor: "category" }}
          >
            <li className="text-black">
              <Link to="/category/wedding">wedding</Link>
            </li>
            <li className="text-black">
              <Link to="/category/potrait">potrait</Link>
            </li>
          </ul>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <ul
          className={
            isOpen
              ? "absolute bg-white top-0 left-0 w-1/2 h-screen border visible pt-4 pl-4 transition-all duration-300 text-black"
              : "absolute bg-white top-0 left-0 w-[0%] h-screen border invisible pt-4 pl-0 transition-all duration-300 text-black"
          }
        >
          <Link to="/gallery" onClick={toggleMenu}>
            Gallery
          </Link>
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
