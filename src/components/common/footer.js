import "./footer.css";
import { facebook } from "../Icons";
import { twitter } from "../Icons";
import { instagram } from "../Icons";
import { pinterest } from "../Icons";
import logo from "./logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-between pt-12 pb-6">
          <p className="text-white">{logo}</p>
          <div className="flex gap-x-4">
            <span className="text-white">{facebook}</span>
            <span className="text-white">{twitter}</span>
            <span style={{ width: 24, height: 24 }} className="text-white">
              {pinterest}
            </span>
            <span className="text-white">{instagram}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="footer-list text-white flex justify-between">
            <li className="list pb-2">About</li>
            <li className="list pb-2">Careers</li>
            <li className="list pb-2">Events</li>
            <li className="list pb-2">Products</li>
            <li className="list pb-2">Support</li>
          </ul>
          <span className="text-gray-300">
            © 2021 Loopstudios. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
