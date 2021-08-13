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

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <form className="mb-2" action="">
            <h3>agify API</h3>
            <p className="text-center bg-success text-light">{ivalue}</p>
            <input
              className="form-control mb-3"
              type="text"
              value={ivalue}
              onChange={handleChange}
            />
            <input
              className="btn btn-primary"
              defaultValue="lookup"
              onClick={putName}
            />
          </form>
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
