import Header from "../layouts/Header";
import pic1 from "../assets/potraits/1.jpg";
import pic2 from "../assets/potraits/2.jpg";
import pic3 from "../assets/potraits/3.jpg";
import pic4 from "../assets/potraits/4.jpg";
import pic5 from "../assets/potraits/5.jpg";

export default function Potraits() {
  return (
    <>
      <Header />
      <h2 className="font-sora text-[10rem] text-center font-black">Potrait</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-350 mx-auto">
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
        <img src={pic4} alt="" />
        <img src={pic5} alt="" />
      </div>
    </>
  );
}
