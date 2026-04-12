import Header from "../layouts/Header";
import pic1 from "../assets/wedding/1.jpg";
import pic2 from "../assets/wedding/2.jpg";
import pic3 from "../assets/wedding/3.jpg";

export default function Weddings() {
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
          <dialog>
            <div className="modal-box" id="modal">
              <h3 className="text-lg font-bold">Hello!</h3>
              <p className="py-4">Press ESC key or click outside to close</p>
            </div>
          </dialog>
          <img src={pic3} alt="" />
          <img src={pic2} alt="" className="row-span-2 " />
        </div>
      </main>
    </>
  );
}
