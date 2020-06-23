import React, {useState, useEffect} from "react";

const Options = ({options}) => {
  const [currentOptions, setCurrentOptions] = useState([]);

  const handleClick = (selectedOption) => {
    if (currentOptions.indexOf(selectedOption) >= 0) {
      let index = currentOptions.indexOf(selectedOption);
      let newOptions = currentOptions.slice();
      newOptions.splice(index, 1);
      console.log("new options", newOptions);
      setCurrentOptions(newOptions);
    } else {
      let newOptions = currentOptions;
      setCurrentOptions(newOptions.concat(selectedOption));
    }
  };

  console.log("current options", currentOptions);

  return (
    <div className="optionsWrapper">
      <div className="optionsContainer">
        {options.length
          ? options.map((option, i) => {
              if (currentOptions.indexOf(option) > -1) {
                console.log("in the array");
                return (
                  <div
                    className="selected"
                    key={i}
                    value={option}
                    onClick={() => handleClick(option)}
                  >
                    {option}
                  </div>
                );
              } else {
                console.log("not in the array");
                return (
                  <div
                    className="box"
                    key={i}
                    value={option}
                    onClick={() => handleClick(option)}
                  >
                    {option}
                  </div>
                );
              }
            })
          : ""}
      </div>
    </div>
  );
};

export default Options;
