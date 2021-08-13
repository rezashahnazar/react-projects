import React, { useState } from "react";

export default function AppJoke() {
  const names = ["reza", "ali", "ahmad", "maryam", "zahra"];

  const compNames = names.map((name) => {
    return (
      <p className="text-center bg-warning m-1 text-light">{name} is ok.</p>
    );
  });

  const [joke, setJoke] = useState("First Joke");

  let changeJoke = () => {
    setJoke("New Joke");
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body text-center">
          <h1 className="text-center">{joke}</h1>
          <input
            type="button"
            className="btn btn-success"
            defaultValue="change the joke"
            onClick={changeJoke}
          />
        </div>
        <div className="card-footer">
          <h3 className="text-info">Here is an example of Array mapping:</h3>
          {compNames}
        </div>
      </div>
    </div>
  );
}
