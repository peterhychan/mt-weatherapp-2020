import React from "react";
import "./weather.css";

const Weather = ({
  cityname,
  weatherIcon,
  temp_celsius,
  temp_max,
  temp_min,
  description,
}) => {
  return (
    <div className="container text-light">
      <div className="Card">
        <h1 className="text-white py-3">{cityname}</h1>
        <h5 className="py-4">
          <i className={`wi ${weatherIcon} display-1`} />
        </h5>

        {temp_celsius ? <h1 className="py-2">{temp_celsius}&deg;C</h1> : null}

        {maxminTemp(temp_min, temp_max)}

        <h4 className="py-3">
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </h4>
      </div>
    </div>
  );
};

export default Weather;

const maxminTemp = (min, max) => {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">{min}&deg;C</span>
        <span className="px-4">{max}&deg;C</span>
      </h3>
    );
  }
};
