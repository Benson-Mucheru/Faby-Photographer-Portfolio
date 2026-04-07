import { useState } from "react";
import { Link } from "react-router";

import heroImg from "./assets/hero.png";
import heroVideo from "./assets/hero.mp4";
import Header from "./layouts/Header";
import bgImg from "./assets/bgimg.png";
import pic1 from "./assets/1.jpg";
import pic2 from "./assets/2.jpg";
import pic3 from "./assets/3.jpg";
import pic4 from "./assets/4.jpg";
import pic5 from "./assets/5.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      {/* Hero section */}
      <section className="{`min-h-screen w-full relative text-center bg-[url('./assets/hero.png')] lg:bg-[url('./assets/bg.png')] bg-no-repeat bg-cover bg-center`}">
        <div className="absolute w-full bg-black/40 min-h-screen z-1"></div>
        <div className="text-white p-8 flex items-center z-2 h-screen">
          <div className="z-2 space-y-8">
            <h1 className="font-sora font-bold text-5xl md:text-9xl duration-300">
              Mr. Sololombo Photography
            </h1>
            <p className="font-sora font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui a
              consequuntur necessitatibus accusamus adipisci, recusandae
              molestiae fugiat magni
            </p>
            <div className="flex justify-center gap-4">
              <button className="border px-4 py-2 rounded-lg">Gallary</button>
              <button className="border px-4 py-2 rounded-lg">Contact</button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section>
        <h2 className="text-center text-5xl font-sora">Gallery</h2>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/category/weddings">
            <div className="relative group overflow-hidden">
              <img
                src={pic1}
                alt=""
                className="group-hover:scale-110 object-cover overflow-hidden transition duration-300"
              />
              <h3 className="absolute font-bold text-white top-1/2 left-1/2 text-4xl -translate-1/2 group-hover:text-blue-500 transition duration-300">
                Weddings
              </h3>
            </div>
          </Link>

          <Link to="/category/weddings">
            <div className="relative group overflow-hidden">
              <img
                src={pic3}
                alt=""
                className="group-hover:scale-110 object-cover overflow-hidden transition duration-300"
              />
              <h3 className="absolute font-bold text-white top-1/2 left-1/2 text-4xl -translate-1/2 group-hover:text-blue-500 transition duration-300">
                Weddings
              </h3>
            </div>
          </Link>

          <Link to="/category/weddings">
            <div className="relative group overflow-hidden">
              <img
                src={pic4}
                alt=""
                className="group-hover:scale-110 object-cover overflow-hidden transition duration-300"
              />
              <h3 className="absolute font-bold text-white top-1/2 left-1/2 text-4xl -translate-1/2 group-hover:text-blue-500 transition duration-300">
                Weddings
              </h3>
            </div>
          </Link>

          <Link to="/category/weddings">
            <div className="relative group overflow-hidden">
              <img
                src={pic5}
                alt=""
                className="group-hover:scale-110 object-cover overflow-hidden transition duration-300"
              />
              <h3 className="absolute font-bold text-white top-1/2 left-1/2 text-4xl -translate-1/2 group-hover:text-blue-500 transition duration-300">
                Weddings
              </h3>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default App;
