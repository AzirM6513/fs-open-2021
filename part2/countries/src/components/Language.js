import React from "react";

const Language = ({ languages }) => (
  <ul>
    {languages.map((language, id) => (
      <li key={id}>{language.name}</li>
    ))}
  </ul>
);

export default Language;
