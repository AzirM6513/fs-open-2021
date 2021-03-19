import React from "react";
import Input from "./Input";

const Filter = ({ search, handleSearchChange }) => (
  <Input text="find countries" value={search} onChange={handleSearchChange} />
);

export default Filter;
