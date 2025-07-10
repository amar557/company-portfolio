import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import ButtonPrimary from "./ButtonPrimary";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
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
  const location = useLocation();

useEffect(() => {
  // Close mobile menu on route change
  setIsOpen(false);
}, [location.pathname]);

  const handleNavbar = function () {
    setIsOpen((open) => !open);
  };
  useEffect(() => {
  const shouldLockScroll = isOpen && window.innerWidth < 912;

  if (shouldLockScroll) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [isOpen]);
  return (
    <div className="flex items-center justify-between py-2 sm:w-10/12 w-full px-3 sm:px-0 mx-auto ">
      <div>
        <img src={Logo} alt="" className="h-16 w-[120px]" />
      </div>
      <div className="flex items-center gap-5  w-auto h-full ">
<ul
  className={`flex xmd:h-auto h-screen xmd:w-auto w-screen items-center
    ${isOpen ? "translate-x-0" : "translate-x-full xmd:translate-x-0"}
    justify-center gap-4 
    xmd:static fixed 
    top-0 right-0 z-40
    transition-all duration-300 ease-in-out
    xmd:bg-transparent bg-white 
    xmd:flex-row flex-col 
    xmd:py-0 py-10`}
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
          {isOpen ?  <RxCross2 />:<CiMenuFries /> }
        </button>
      </div>
    </div>
  );
}

export default Navbar;
