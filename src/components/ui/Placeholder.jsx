import { Link } from "react-router";
export default function Placeholder({ category, img }) {
  return (
    <Link to={"/category/" + category}>
      <div className="relative group overflow-hidden">
        <img
          src={img}
          alt={category}
          className="group-hover:scale-110 object-cover overflow-hidden transition duration-300"
        />
        <h3 className="absolute font-bold text-white top-10/12 left-1/2 text-4xl -translate-1/2 group-hover:text-blue-500 transition duration-300">
          {category}
        </h3>
      </div>
    </Link>
  );
}
