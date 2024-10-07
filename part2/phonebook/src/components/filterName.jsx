import React from "react";

export function FilterName({ filterWord, handleFilter }) {
  return (
    <div>
      filter shown with:{" "}
      <input value={filterWord} onChange={handleFilter} type="text" />
    </div>
  );
}
