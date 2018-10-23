import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <div className="container">
                <h1 className="my-4">
                  <i className="fas fa-clipboard-list" />
                  <span className="text-primary"> CONTACT</span> LIST
                </h1>
                {contacts.map(contact => (
                  <Contact key={contact.id} contact={contact} />
                ))}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
