import { Link } from "react-router";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/src/ScrollTrigger";

export default function Placeholder({ category, img }) {
  const album = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(album.current, {
      scrollTrigger: album.current,
      opacity: 1,
      delay: 0.5,
      start: "top 50%",
    });
  });

  return (
    <Link to={"/category/" + category}>
      <div className="relative group overflow-hidden opacity-0" ref={album}>
        <img
          src={img}
          alt={category}
          className="group-hover:scale-110 object-cover overflow-hidden transition duration-300"
        />
        <h3 className="absolute font-bold text-white top-10/12 left-1/2 md:text-4xl -translate-1/2 group-hover:text-blue-500 transition duration-300">
          {category}
        </h3>
      </div>
    </Link>
  );
}
