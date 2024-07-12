import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import ButtonPrimary from "./ButtonPrimary";
const navLinks = [
  { path: "/", element: "home" },
  { path: "/about", element: "about" },
  { path: "/services", element: "services" },
  { path: "/career", element: "careers" },
  { path: "/contact-us", element: "coutact us" },
  { path: "/legal", element: "legal" },
];
function Navbar() {
  return (
    <div className="flex items-center justify-between py-2 w-10/12 mx-auto">
      <div>
        <img src={Logo} alt="" className="h-16 w-[120px]" />
      </div>
      <div className="flex items-center gap-5">
        <ul className="flex items-center justify-center gap-4 absolute xmd:static top-0 right-0 xmd:flex-row flex-col  ">
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
      </div>
    </div>
  );
}

export default Navbar;
