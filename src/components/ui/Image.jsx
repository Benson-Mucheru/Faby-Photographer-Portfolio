export default function Image({ img }) {
  return (
    <>
      <img
        src={img}
        alt=""
        onClick={() => document.getElementById("modal").showModal()}
      />
    </>
  );
}
