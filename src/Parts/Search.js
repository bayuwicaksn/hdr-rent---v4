import * as AiIcons from "react-icons/ai";

const Search = () => {
  return (
    <div className="flex items-center">
      <div className="relative w-full">
        <div className="relative flex items-center w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full flex items-center pl-14 rounded border border-gray-300 focus:border-transparent focus:ring-0 focus:outline-indigo"
          />
          <i className="absolute left-4 text-2xl text-gray-500">
            <AiIcons.AiOutlineSearch />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Search;
