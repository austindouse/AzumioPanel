import React from "react";

const Header = ({question, prompt}) => {
  return (
    <div>
      <div>{question}</div>
      <div>{prompt}</div>
    </div>
  );
};

export default Header;
