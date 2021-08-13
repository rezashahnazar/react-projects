import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const axios = require("axios");
  const optis = {
    method: "GET",
    url: "https://dad-jokes.p.rapidapi.com/random/joke",
    headers: {
      "x-rapidapi-key": "",
      "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
    },
  };

  const primary = "text";
  const [joke, setJoke] = useState(primary);

  let putJoke = () => {
    axios
      .request(optis)
      .then((Response) => {
        console.log(Response.data.body[0].setup);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="card mt-4">
        <form className="mb-2" action="">
          <h3>Insert variant</h3>
          <input className="form-control mb-3" type="text" />
          <input
            className="btn btn-sm btn-primary"
            defaultValue="lookup"
            onClick={putJoke}
          />
        </form>
        <p className="text-center bg-success text-light">{joke}</p>
      </div>
    </div>
  );
}
