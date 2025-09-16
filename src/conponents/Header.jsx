import PropType from "prop-types";
import { useState } from "react";

function Header({ onSearch }) {
  const [textSearch, setTextSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-4 bg-black ">
      <div className="flex items-center justify-between space-x-4">
        <h1 className="text-[30px] uppercase font-bold text-red-700">Movie</h1>
        <nav className="hidden sm:flex items-center space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </nav>
         
      <div className="flex items-center space-x-4 ">
        <input
          type="text"
          placeholder="Search"
          className="p-2 w-[100px] sm:w-[200px] md:w-[250px] lg:w-[300px] text-black bg-white rounded"
          onChange={(e) => setTextSearch(e.target.value)}
          value={textSearch}
        />
        <button
          className="p-2 text-white bg-red-600 rounded w-[60px] sm:w-[80px] md:w-[110px] lg:w-[130px]"
          onClick={() => onSearch(textSearch)}
        >
          Search
        </button>
        <button
          className="sm:hidden text-white text-2xl "
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
       </div>
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center gap-2 py-4 bg-black">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div>
      )}
    </div>
  );
}
Header.propTypes = {
  onSearch: PropType.func,
};

export default Header;
