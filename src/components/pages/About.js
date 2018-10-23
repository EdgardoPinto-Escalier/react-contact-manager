import React from "react";

export default () => {
  return (
    <div className="container">
      <h1 className="my-4">
        <i className="fas fa-info-circle" /> ABOUT{" "}
        <span className="text-primary">REACT CONTACT MANAGER</span>
      </h1>
      <p className="lead">
        Simple contact manager web application made with React. This is a static
        React application that gets fake data from
        https://jsonplaceholder.typicode.com using axios for the http requests.
        React Contact Manager is a CRUD application and the following React
        concepts has been used to create this simple application:
      </p>
      <ul>
        <li>Components, JSX and Props</li>
        <li>State and Context API</li>
        <li>Working with forms</li>
        <li>Form validations</li>
        <li>React Router</li>
        <li>Lifecycle and HTTP requests</li>
        <li>GET, POST, DELETE and PUT requests</li>
        <li>Using Async/Await</li>
      </ul>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
};
