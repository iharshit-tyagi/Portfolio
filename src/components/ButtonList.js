const ButtonList = () => {
  return (
    <div>
      Button List
      <ul className="flex gap-6">
        <li>
          <a href="https://wa.link/9e0dik">
            <button className="text-2xl border-2 p-2 border-orange-400 text-orange-500">
              📱 Contact Me
            </button>
          </a>
        </li>
        <li>
          <button className=" text-2xl border-2 border-green-400 p-2 text-green-200">
            {" "}
            CHECKOUT MY WORK
          </button>
        </li>
      </ul>
    </div>
  );
};
export default ButtonList;
