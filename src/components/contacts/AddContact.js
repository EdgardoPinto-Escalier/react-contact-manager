import React, { Component } from 'react'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  }


  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
      <div className="card-header"><i className="far fa-address-card fa-lg"></i>  ADD CONTACT</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name"><i class="fas fa-user-circle"></i> Name</label>
              <input 
                type="text" 
                name="name"
                className="form-control"
                placeholder="Enter name..."
                value={name}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email"><i class="fas fa-at"></i> Email</label>
              <input 
                type="email" 
                name="email"
                className="form-control"
                placeholder="Enter your email..."
                value={email}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone"><i class="fas fa-phone-square"></i> Phone</label>
              <input 
                type="text" 
                name="phone"
                className="form-control"
                placeholder="Enter your phone..."
                value={phone}
              />
            </div>

            <input 
              type="submit" 
              value="ADD NEW CONTACT" 
              className="btn btn-block btn-primary"
            />
          </form>
        </div>
      </div>
    )
  }
}

export default AddContact;
