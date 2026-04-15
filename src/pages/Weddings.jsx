import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ScrollTrigger from "gsap/src/ScrollTrigger";
import Header from "../layouts/Header";
import pic1 from "../assets/wedding/1.jpg";
import pic2 from "../assets/wedding/2.jpg";
import pic3 from "../assets/wedding/3.jpg";

export default function Weddings() {
  const pic = useRef(null);
  /* gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(pic.current, {
      scrollTrigger: pic.current,
      opacity: 1,
      delay: 0.5,
      start: "top 50%",
    });
  }); */

  return (
    <>
      <Header />

      <main className="bg-gray-100">
        <h2 className="font-sora text-[10rem] text-center font-black">
          Wedding
        </h2>
        <div className="grid grid-cols-8 md:grid-cols-3 gap-2 max-w-350 mx-auto">
          <img
            src={pic1}
            alt=""
            onClick={() => document.getElementById("modal").showModal()}
          />
          <dialog className="modal backdrop-blur-sm" id="modal">
            <form method="dialog" className="modal-backdrop">
              <button className="btn btn-sm btn-circle absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="modal-box w-full max-w-5xl p-0 bg-transparent shadow-none rounded-none mt-10">
              {/* Carousel */}
              <div className="carousel w-full max-h-[90vh]">
                <div
                  id="slide1"
                  className="carousel-item relative w-full h-auto"
                >
                  <img src={pic1} alt="" className="mx-auto object-cover" />
                  <div className="absolute left-5 right-5 top-1/2 hidden md:flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>

                <div
                  id="slide2"
                  className="carousel-item relative w-full h-auto"
                >
                  <img src={pic2} alt="" className="mx-auto object-cover" />
                  <div className="absolute left-5 right-5 top-1/2 hidden md:flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>

                <div
                  id="slide3"
                  className="carousel-item relative w-full h-auto"
                >
                  <img src={pic3} alt="" className="mx-auto object-cover" />
                  <div className="absolute left-5 right-5 top-1/2 hidden md:flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </dialog>

          <img src={pic3} alt="" />
          <img src={pic2} alt="" className="row-span-2" />
        </div>
      </main>
    </>
  );
}
