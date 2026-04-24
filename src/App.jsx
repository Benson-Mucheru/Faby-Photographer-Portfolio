import { useRef, useState } from "react";
import { Link } from "react-router";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";

import heroImg from "./assets/hero.png";

import Header from "./layouts/Header";

import pic1 from "./assets/1.jpg";
import pic2 from "./assets/2.jpg";
import pic3 from "./assets/3.jpg";
import pic4 from "./assets/4.jpg";
import potrait from "./assets/placeholder/potrait.jpg";
import wedding from "./assets/placeholder/wedding.jpg";
import event from "./assets/placeholder/event.jpg";
import street from "./assets/placeholder/street.jpg";
import Placeholder from "./components/ui/Placeholder.jsx";
import photographer from "./assets/logo.png";

function App() {
  const [count, setCount] = useState(0);
  const title = useRef(null);
  const subTitle = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(SplitText);
    gsap.to(subTitle.current, {
      opacity: 1,
      duration: 1,
      delay: 1,
    });

    SplitText.create(title.current, {
      type: "chars",
      smartWrap: true,
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        return gsap.fromTo(
          self.chars,
          {
            opacity: 0,
            y: 100,
          },
          { opacity: 1, y: 80, duration: 0.5, stagger: 0.1, delay: 2 },
        );
      },
    });
  });
  return (
    <>
      <Header />

      <main className="space-y-10 bg-white/50">
        {/* Hero section */}
        <section className="{`min-h-screen w-full relative text-center bg-[url('./assets/hero.png')] lg:bg-[url('./assets/bg.png')] bg-no-repeat bg-cover bg-center`}">
          <div className="absolute w-full bg-black/40 h-[80vh] lg:min-h-screen z-1"></div>
          <div className="text-white lg:p-8 flex lg:items-center z-2 h-[80vh] lg:h-screen">
            <div className="z-2 lg:space-y-8 mx-auto mt-45 max-w-350">
              <div ref={subTitle} className="opacity-0">
                <h2 className="font-sora text-2xl md:text-3xl lg:text-4xl font-bold">
                  Based In Nairobi
                </h2>
                <h3 className="font-sora text-2xl md:text-3xl lg:text-4xl font-bold">
                  Available Country Wide
                </h3>
              </div>
              <h1
                className="font-sora font-black text-6xl md:text-9xl lg:text-[14rem]"
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
            <Placeholder category={"event"} img={event} />
            <Placeholder category={"street"} img={street} />
          </div>
        </section>

        {/* About */}
        <section className="flex gap-4 max-w-350 mx-auto">
          <img src={photographer} alt="" className="w-1/2" />
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
