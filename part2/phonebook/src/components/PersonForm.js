import React from "react";
import Input from "./Input";

const PersonForm = ({ data }) => (
  <form onSubmit={data.addPerson}>
    <Input text="name:" value={data.newName} onChange={data.handleNameChange} />
    <Input
      text="number:"
      value={data.newNumber}
      onChange={data.handleNumberChange}
    />
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

export default PersonForm;
