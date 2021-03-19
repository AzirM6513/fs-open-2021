import React from "react";
import Person from "./Person";

const Persons = ({ persons, deletePerson }) => (
  <ul>
    {persons.map((person) => (
      <Person
        key={person.name}
        person={person}
        deletePerson={() => deletePerson(person)}
      />
    ))}
  </ul>
);

export default Persons;
