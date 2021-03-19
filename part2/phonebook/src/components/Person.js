import React from "react";

const Person = ({ person }) => (
  <li>
    {person.name} {person.number}
    <button>delete</button>
  </li>
);

export default Person;
