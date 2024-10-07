import React from "react";

export function Total({parts }) {
  const sumPart = parts.reduce((sum,part)=> sum+part.exercises,0)
  return <p><strong>total of exercises {sumPart}</strong> </p>;
}
