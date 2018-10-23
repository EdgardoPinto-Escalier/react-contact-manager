import React, { Component } from 'react';


const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };
      case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default: 
      return state;
  }
};

export class Provider extends Component {
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;