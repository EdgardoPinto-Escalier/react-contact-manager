import React from "react";

export default function NotFound() {
  return (
    <div className="container">
      <h1 className="my-4">
        <i className="far fa-question-circle" />{" "}
        <span className="text-primary">404</span> PAGE NOT FOUND
      </h1>
      <p className="lead">
        Sorry the page you are looking for doesn't exist...
      </p>
    </div>
  );
}
