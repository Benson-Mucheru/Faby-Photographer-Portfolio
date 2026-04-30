import { useState } from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="drawer sticky top-0 z-3 w-full text-white backdrop-blur-md">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar w-full bg-black/90">
            <div className="mx-2 flex-1 px-2">
              <Link to="/">
                <h2
                  className="font-bold font-sora text-2xl pt-3"
                  style={{ lineHeight: 0.5 }}
                >
                  Mr. Sololobo
                </h2>
                <h3 className="text-lg font-bold">PicZel Pictures</h3>
              </Link>
            </div>

            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <button
                    popoverTarget="gallaries"
                    style={{ anchorName: "category" }}
                  >
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
                </li>
                <li>
                  <a>About</a>
                </li>

                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>

            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-2"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-black min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <nav className="sticky top-0 z-3 w-full bg-black/90 text-white backdrop-blur-md">
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
    </nav> */}
    </>
  );
}
