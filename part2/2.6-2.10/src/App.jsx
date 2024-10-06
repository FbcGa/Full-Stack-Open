import { useState } from "react";
import { FormPerson } from "./components/formPerson";
import { People } from "./components/people";
import { FilterName } from "./components/filterName";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newPerson, setNewPerson] = useState({
    name: "",
    number: "",
  });

  const [filterWord, setFilterWord] = useState("");
  const handleFilter = (event) => {
    setFilterWord(event.target.value);
  };

  const filterName = !filterWord
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(filterWord.toLocaleLowerCase())
      );

  const addPeople = (event) => {
    const nameExist = checkName(persons, newPerson.name);
    event.preventDefault();
    if (nameExist) {
      return alert(`${newPerson.name} already exist`);
    } else {
      setPersons([
        ...persons,
        {
          name: newPerson.name.trim(),
          number: newPerson.number,
          id: persons.length + 1,
        },
      ]);
      setNewPerson({ name: "", number: "" });
    }
  };

  const handleName = (event) => {
    setNewPerson({ ...newPerson, name: event.target.value });
  };

  const handleNumber = (event) => {
    setNewPerson({ ...newPerson, number: event.target.value });
  };

  const checkName = (personsToCheck, newName) => {
    return personsToCheck.some((person) => person.name === newName.trim());
  };

  return (
    <div>
      <section>
        <h2>Phonebook</h2>
        <FilterName filterWord={filterWord} handleFilter={handleFilter} />
      </section>
      <section>
        <h2>Add a New</h2>
        <FormPerson
          addPeople={addPeople}
          newPerson={newPerson}
          handleName={handleName}
          handleNumber={handleNumber}
        />
      </section>
      <section>
        <h2>Numbers</h2>
        <People persons={filterName} />
      </section>
    </div>
  );
};

export default App;
