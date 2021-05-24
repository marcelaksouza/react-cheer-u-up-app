import React from "react";
import Label from "./Form/Label";
import Input from "./Form/Input";
import DropDownOptions from "./Form/DropDownOptions";

const SearchCatsForm = () => {
  return (
    <div>
      <div className="justify-center sm:w-full">
        <form className="bg-white rounded-sm px-8 pt-6 mb-4">
          <Label>Quantity</Label>
          <Input />

          <Label>Cats Categories</Label>
          <DropDownOptions type={"categories"}/>

          <Label>Cats Breeds</Label>
          <DropDownOptions type={"breeds"}/>

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
