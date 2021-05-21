import React from "react";

const SearchCatsForm = () => {
  return (
    <div>
      <div className="shadow flex flex-wrap justify-center p-2 py-4 px-4 max-w-sm">
        <form className="bg-white rounded-sm px-8 pt-6 pb-8 mb-4">
          <div className="relative">
            <label className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">
              Quantity
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-red-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              value="1 to 100"
            />
          </div>

          <div className="relative">
            <label className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">
              Cats Categories
            </label>
            <select className=" drop-shadow-sm block appearance-none w-full border border-red-300 text-gray-700 py-3 px-4 mb-3 rounded leading-tight focus:outline-none">
              <option>Boxes</option>
              <option>Hats</option>
            </select>
          </div>

          <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">
              Cats Breeds
            </label>
            <select className="block appearance-none w-full border border-red-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none">
              <option value="chartreus">Chartreus</option>
              <option value="birman">Birman</option>
            </select>
          </div>

          <div className="py-4">
            <button
              className="block w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-4 mb-3 rounded"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchCatsForm;
