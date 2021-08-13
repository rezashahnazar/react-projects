import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [xname, setName] = useState("api Name");
  const [xage, setAge] = useState("api Age");
  const [ivalue, setIvalue] = useState("type a name");

  let optis = {
    method: "GET",
    url: "https://api.agify.io/",
    headers: {},
    params: { name: ivalue },
  };

  let putName = () => {
    axios
      .request(optis)
      .then((Response) => {
        setName(Response.data.name);
        setAge(Response.data.age);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let handleChange = (event) => {
    setIvalue(event.target.value);
  };

  let evalEnter = (event) => {
    if (event.key === "Enter") {
      putName();
    }
  };

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-header">
          <h1 className="card-head text-center">Agify API</h1>
          <p className="text-center text-muted">My first UI made by React!</p>
        </div>
        <div className="card-body text-center mb-2">
          <div className="card-text text-center">{ivalue}</div>
          <input
            className="form-control form-control-sm my-3"
            type="text"
            value={ivalue}
            onChange={handleChange}
            onKeyDown={evalEnter}
          />
          <input
            className="btn btn-sm btn-primary"
            defaultValue="lookup"
            onClick={putName}
            type="button"
          />
        </div>
        <div className="card-footer">
          <div className="row">
            <p className="text-center col bg-danger text-light mx-1 ">
              {xname}
            </p>
            <p className="text-center col bg-danger text-light mx-1 ">{xage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
