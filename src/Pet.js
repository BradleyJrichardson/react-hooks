import React from "react";
const Pet = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
      <br />
      <hr />
    </div>
  );
};

export default Pet;
