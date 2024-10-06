import React from "react";

function Part({ part}) {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}
export function Content({parts}) {
  return (
    parts.map((part)=> (
      <Part key={part.id} part={part}/>
    )
    )
      

  );
}
