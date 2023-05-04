import React from "react";
import "./styles/form.css";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const Form = ({ handleSearch, setQ, q }) => {
  return (
    // <form onSubmit={handleSubmit}>
      <div class="flex rounded-full border-grey-light border" onKeyDown={handleSearch}>
        <button>
          <span class="w-auto flex justify-end items-center text-grey p-2">
            <BiSearch className=" text-red-600" />
          </span>
        </button>
        <input
          class="w-full bg-inherit outline-none rounded mr-4"
          type="text"
          placeholder="Search..."
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
          }}
        />
      </div>
    // </form>
  );
};

export default Form;
