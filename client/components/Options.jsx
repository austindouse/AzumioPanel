import React from "react";

const Options = ({options}) => {
  return (
    <div className="optionsWrapper">
      <div className="optionsContainer">
        {options.length
          ? options.map((option, i) => {
              return (
                <div className="box" key={i}>
                  {option}
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Options;
