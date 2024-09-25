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
    <>
      <Part part={parts[0]}  />
      <Part part={parts[1]}  />
      <Part part={parts[2]}  />
    </>
  );
}
