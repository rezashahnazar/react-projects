import React, { useState } from "react";

export default function AppJoke() {
  const [joke, setJoke] = useState("First Joke");

  let changeJoke = () => {
    setJoke("New Joke");
  };

  return (
    <div className="container mt-4">
      <div className="card p-2">
        <h1 className="text-center">{joke}</h1>
        <input
          type="button"
          className="btn btn-success"
          defaultValue="change the joke"
          onClick={changeJoke}
        />
      </div>
    </div>
  );
}
