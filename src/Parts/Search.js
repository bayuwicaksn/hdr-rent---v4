import * as AiIcons from "react-icons/ai";

const Search = () => {
  return (
    <div>
      <div className="">
        <div className="flex items-center">
          <div className="relative w-full">
            <div className=" relative focus:outline-none flex jusitfy-start w-full   text-gray-800 rounded  items-center border-gray-300 focus:border-gray-400 border  ">
              <input
                type="text"
                placeholder="Search"
                className="placeholder-gray-800 text-base placeholder-text-base leading-4 py-3 pl-8 w-full pl-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded "
              />
              <i className="text-3xl absolute left-4">
                <AiIcons.AiOutlineSearch />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
