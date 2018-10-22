import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {

    state = {
      contacts: [
        {
          id: 1,
          name: 'Peter Thomas',
          email: 'petert@mail.com',
          phone: '523-3332-5236'
        },
        {
          id: 2,
          name: 'Laura Williams',
          email: 'laura@gmail.com',
          phone: '111-222-3333'
        },
        {
          id: 3,
          name: 'Sean Peters',
          email: 'sean1@yahoo.com',
          phone: '222-333-4444'
        }
      ]
    };
  

  render() {

    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact 
            key={contact.id} 
            contact={contact} 
          />
        ))}
      </React.Fragment>
    )
  }
}

export default Contacts;
