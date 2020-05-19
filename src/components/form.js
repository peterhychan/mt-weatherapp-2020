import React from "react";
import "./form.css";

const Form = ({ loadweather, error }) => {
  return (
    <div className="container h-100">
      <form onSubmit={loadweather}>
        <div>
          {error ? (
            <div className="alert alert-danger mx-5" role="alert">
              City AND Country are required.
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="row offset-md-3">
          <divs>
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              autoComplete="off"
            />
          </divs>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              name="country"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3 mt-md-0 mt-2 text-md-left">
            <button className="btn btn-warning">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
