import { useRef, useState } from "react";
import { Link } from "react-router";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import heroImg from "./assets/hero.png";

import Header from "./layouts/Header";

import pic1 from "./assets/1.jpg";
import pic2 from "./assets/2.jpg";
import pic3 from "./assets/3.jpg";
import pic4 from "./assets/4.jpg";
import pic5 from "./assets/5.jpg";
import potrait from "./assets/placeholder/potrait.jpg";
import wedding from "./assets/placeholder/wedding.jpg";
import Placeholder from "./components/ui/placeholder";

function App() {
  const [count, setCount] = useState(0);
  const title = useRef(null);

  useGSAP(() => {
    gsap.to(title.current, {
      rotation: "90",
      duration: 3,
    });
  });
  return (
    <>
      <Header />

      <main className="space-y-10 bg-black/50 text-white">
        {/* Hero section */}
        <section className="{`min-h-screen w-full relative text-center bg-[url('./assets/hero.png')] lg:bg-[url('./assets/bg.png')] bg-no-repeat bg-cover bg-center`}">
          <div className="absolute w-full bg-black/40 min-h-screen z-1"></div>
          <div className="text-white p-8 flex items-center z-2 h-screen">
            <div className="z-2 space-y-8 mx-auto max-w-350">
              <div>
                <h2 className="font-sora text-5xl font-bold">Based In Kenya</h2>
                <h3 className="font-sora text-5xl font-bold">
                  Available Country Wide
                </h3>
              </div>
              <h1
                className="font-sora font-black text-5xl md:text-[12rem] duration-300"
                ref={title}
              >
                PORTFOLIO
              </h1>
              {/* <p className="font-sora font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui a
                consequuntur necessitatibus accusamus adipisci, recusandae
                molestiae fugiat magni
              </p>
              <div className="flex justify-center gap-4">
                <button className="border px-4 py-2 rounded-lg">Gallary</button>
                <button className="border px-4 py-2 rounded-lg">Contact</button>
              </div> */}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="max-w-350 mx-auto">
          <h2 className="text-center text-6xl font-bold font-sora pb-4">
            Gallery
          </h2>
          <div className="grid grid-cols-2 gap-2">
            <Placeholder category={"wedding"} img={wedding} />
            <Placeholder category={"potrait"} img={potrait} />

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

        {/* About */}
        <section className="flex gap-4 max-w-350 mx-auto">
          <img src={pic1} alt="" className="w-1/2" />
          <div className="w-1/2 space-y-4">
            <h2 className="font-sora text-6xl font-bold">
              <span>---</span> About the <br /> photographer.
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              doloremque inventore amet laborum sed tenetur quos minima,
              accusantium tempore, consequuntur minus dolore incidunt cum
              laudantium animi dicta autem. Deleniti, odit.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
