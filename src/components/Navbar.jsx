import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import ButtonPrimary from "./ButtonPrimary";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
const navLinks = [
  { path: "/", element: "home" },
  { path: "/about", element: "about" },
  { path: "/services", element: "services" },
  { path: "/career", element: "careers" },
  { path: "/contact-us", element: "coutact us" },
  { path: "/legal", element: "legal" },
];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavbar = function () {
    setIsOpen((open) => !open);
  };
  return (
    <div className="flex items-center justify-between py-2 w-10/12 mx-auto ">
      <div>
        <img src={Logo} alt="" className="h-16 w-[120px]" />
      </div>
      <div className="flex items-center gap-5  w-auto h-full relative">
        <ul
          className={`flex items-center ${
            isOpen ? "translate-x-[500px]" : "translate-x-0"
          } justify-center gap-4 absolute xmd:static  top-0 transition-all  xmd:bg-transparent bg-orange-600  right-0 xmd:flex-row xmd:py-0 py-10 xmd:w-auto w-full  flex-col  `}
        >
          {navLinks.map((item, i) => (
            <NavLink
              to={item.path}
              key={i}
              className="capitalize text-base font-lufga"
            >
              <li>{item.element}</li>
            </NavLink>
          ))}
        </ul>
        <ButtonPrimary>get started</ButtonPrimary>
        <button
          className="xmd:hidden block  relative z-50"
          onClick={handleNavbar}
        >
          {isOpen ? <CiMenuFries /> : <RxCross2 />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
