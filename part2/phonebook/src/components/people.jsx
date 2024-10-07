import React from 'react'

export function People({persons}) {
  return (
    persons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}{" "}
        </p>
      ))
  )
}

