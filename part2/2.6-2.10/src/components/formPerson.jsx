import React, { useState } from "react";

export function FormPerson({ addPeople, newPerson, handleName, handleNumber  }) {
  return (
    <form onSubmit={addPeople}>
      <div>
        name: <input value={newPerson.name} onChange={handleName} />
      </div>
      <div>
        number: <input value={newPerson.number} onChange={handleNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
