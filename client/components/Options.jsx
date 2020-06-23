import React from "react";

const Options = ({options}) => {
  console.log(options);
  return (
    <div>
      {options.length
        ? options.map((option, i) => {
            return <div key={i}>{option}</div>;
          })
        : ""}
    </div>
  );
};

export default Options;
