"use client";
import React from "react";
import { RxCross2 } from "react-icons/rx";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };
  return (
    <div>
      <button type="reset" onClick={reset}>
        <RxCross2 />
      </button>
    </div>
  );
};

export default SearchFormReset;
