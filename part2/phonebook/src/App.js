import React, { useState, useEffect } from "react";

import personService from "./services/persons";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import ErrorNotification from "./components/ErrorNotification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const personExists = (personObject) => {
    const personArray = persons.map((person) => person.name.toLowerCase());
    return personArray.includes(personObject.name.toLowerCase());
  };

  const valueEmpty = (personObject) => {
    return !(personObject.name && personObject.number);
  };

  const findId = (personObject) => {
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name.toLowerCase() === personObject.name.toLowerCase()) {
        return persons[i].id;
      }
    }
  };

  const resetInput = () => {
    setNewName("");
    setNewNumber("");
  };

  const sendMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (valueEmpty(personObject)) {
      alert("please fill all fields");
      return;
    }

    if (personExists(personObject)) {
      const id = findId(personObject);

      personService.update(id, personObject);
      resetInput();
      sendMessage(`Updated ${personObject.name}`);

      personService.getAll().then((updatedPersons) => {
        setPersons(updatedPersons);
      });
      return;
    }

    personService
      .create(personObject)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        resetInput();
        sendMessage(`Added ${personObject.name}`);
      })
      .catch((error) => {
        setError(`${error.response.data.error}`);
        setTimeout(() => {
          setError(null);
        }, 5000);
      });
  };

  const deletePerson = (person) => {
    console.log(person);
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.deleteObject(person.id).catch(() => {
        setError(
          `Information of ${person.name} has already been removed from server`
        );
        setTimeout(() => {
          setError(null);
        }, 5000);
      });

      personService.getAll().then((updatedPersons) => {
        setPersons(updatedPersons);
      });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  const personFormData = {
    addPerson,
    newName,
    handleNameChange,
    newNumber,
    handleNumberChange,
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <ErrorNotification message={error} />
      <Filter search={search} handleSearchChange={handleSearchChange} />

      <h2>add new contact information</h2>
      <PersonForm data={personFormData} />

      <h2>Numbers</h2>
      <Persons persons={filteredPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
