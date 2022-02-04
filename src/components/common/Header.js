import { useState } from "react";
import "./header.css";
import logo from "./logo";
import { openNav } from "../Icons";
import { closeNav } from "../Icons";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <header className="absolute z-10 w-full px-4">
      <div className="max-w-screen-lg mx-auto header ">
        <div className="md:hidden">
          {open ? (
            <span
              onClick={() => setOpen(false)}
              className="navIcon p-6 text-white"
            >
              {closeNav}
            </span>
          ) : (
            <span onClick={handleOpen} className="navIcon  p-6 text-white">
              {openNav}
            </span>
          )}
          <div
            className={`flex flex-col uppercase py-8 ${
              open ? "block" : "hidden"
            }`}
          >
            <span>{logo}</span>
            <nav>
              <ul className="header-list-mobile mt-20 text-white text-xl flex flex-col">
                <li className="list pb-2">About</li>
                <li className="list pb-2">Careers</li>
                <li className="list pb-2">Events</li>
                <li className="list pb-2">Products</li>
                <li className="list pb-2">Support</li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="hidden md:flex justify-between py-8">
          <span>{logo}</span>
          <nav>
            <ul className="header-list text-white flex justify-between">
              <li className="list pb-2">About</li>
              <li className="list pb-2">Careers</li>
              <li className="list pb-2">Events</li>
              <li className="list pb-2">Products</li>
              <li className="list pb-2">Support</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
