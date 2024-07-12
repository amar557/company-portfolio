function ButtonSecondary({ img, text }) {
  return (
    <button className="shadow-lg rounded-3xl py-3 px-4 flex gap-2 font-medium items-center justify-between w-max bg-white">
      <img src={img} alt="" />{" "}
      <span className="text-base text-black first-letter:uppercase">
        {text}
      </span>
    </button>
  );
}

export default ButtonSecondary;
