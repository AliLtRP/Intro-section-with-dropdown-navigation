import NavbarUL from "./NavbarUL";
import menu from "../assets/icon-menu.svg";
import closeMenu from "../assets/icon-close-menu.svg";
import { useState } from "react";

const Navbar = () => {
  const [drop, setDrop] = useState<boolean>(false);

  return (
    <div className="flex w-[98%] h-[10vh] mx-auto justify-between items-center mx-auto">
      <div className="font-bold text-4xl">snap</div>

      <div className="w-full hidden sm:block">
        <NavbarUL />
      </div>

      <div className=" relative flex h-auto sm:hidden items-center pt-2">
        <img src={menu} alt="menu icon" onClick={() => setDrop(!drop)} />
      </div>
      <div
        className={`${
          drop ? "block" : "hidden"
        } absolute z-0 inset-0 bg-[#00000094]`}
      ></div>
      <div
        className={`${
          drop ? "flex" : "hidden"
        } absolute h-[100%] z-10  top-0 right-0 w-[50vw] transition-all bg-white shadow-2xl`}
      >
        <div className="w-full flex flex-col items-start p-4">
          <div className="w-full flex justify-end">
            <img src={closeMenu} onClick={() => setDrop(!drop)} />
          </div>

          <div className="w-full">
            <NavbarUL />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
