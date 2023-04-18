import React, { useState } from "react";

function One() {
  const [name, setName] = useState();
  const [data, setData] = useState();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    setData(name);
  };

  return (
    <div>
      <h1>Hello {data}</h1>
      <input onChange={handleChange} placeholder="Enter name" />
      <br />
      <br />
      <button onClick={handleClick}>submit</button>
    </div>
  );
}

export default One;
