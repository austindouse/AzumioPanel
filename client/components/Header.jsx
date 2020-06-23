import React from "react";

const Header = ({question, prompt}) => {
  return (
    <div className="header">
      <div className="question">{question}</div>
      <div className="prompt">{prompt}</div>
    </div>
  );
};

export default Header;
