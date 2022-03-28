import React, { useState } from "react";

const Greeting = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <div className="container">
      <h1>Hello World!</h1>
      {!isClicked && <p>Not clicked.</p>}
      {isClicked && <p>Clicked.</p>}
      <button onClick={handleClick} className="btn btn-danger">
        Click me
      </button>
      <p className="d-flex justify-content-end">
        This page is for unit testing
      </p>
    </div>
  );
};

export default Greeting;
