import pic from "../assets/1.jpg";
import Header from "../layouts/Header";

export default function Weddings() {
  return (
    <>
      <Header />

      <h2>Weddings</h2>
      <div className="grid grid-cols-3 gap-4">
        <img src={pic} alt="" />
        <img src={pic} alt="" />
        <img src={pic} alt="" />
        <img src={pic} alt="" />
        <img src={pic} alt="" />
        <img src={pic} alt="" />
      </div>
    </>
  );
}
