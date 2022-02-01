import "./header.css";
import logo from "./logo";

const Header = () => {
  return (
    <header className="absolute z-10 w-full px-4">
      <div className="max-w-screen-lg mx-auto header">
        <div className="flex justify-between py-8">
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
