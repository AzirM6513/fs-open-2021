import React from "react";
import Input from "./Input";

const Filter = ({ search, handleSearchChange }) => (
  <Input
    text="filter shown with"
    value={search}
    onChange={handleSearchChange}
  />
);

export default Filter;
