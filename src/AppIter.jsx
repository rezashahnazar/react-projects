import React, { useState } from "react";

export default function AppIter() {
  const names = ["reza", "ali", "ahmad", "maryam", "zahra"];

  const [index, setIndex] = useState(0);
  const pName = names[index];

  const changeName = () => {
    if (index < names.length - 1) {
      setIndex(index + 1);
    } else {
      alert("Finished!");
    }
  };

  return (
    <div className="container">
      <div className="card mt-3 text-center">
        <h1 className="card-header">Example of array iteration</h1>
        <p className="mb-4">{pName}</p>
        <input
          type="button"
          className="text-center btn btn-danger btn-sm"
          defaultValue="change the name"
          onClick={changeName}
        />
      </div>
    </div>
  );
}
