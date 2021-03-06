import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import _ from 'lodash'

class NewContactForm extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      image: '',
      email: '',
      phone: '',
      deleted: false,
      id: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    //generates unique id for contact
    const generateId = () => Math.round(Math.random() * 100000000);
     //console.log this id for test
     console.log(generateId());
    //whenever handleClick function is invoked -
    //1. create the contact object with with user/text properties and values from input
    const contact = {
      name: this.state.name,
      image: this.state.image,
      email: this.state.email,
      phone:this.state.phone,
      deleted:false,
      id:generateId()

    }
    //2. give the created contact object reference to the UpdateContact function in app.js so that addContact on app.js will recieve the properties of the contact object and know to invoke updateContact and re-render the state.
    this.props.addContact(contact);
  }

  render() {
    return (


  <div>
    <div class="container form-container">
      <div class="row" >

        <div class="col-2"> </div>

        <div class="col-8">
          <div class="card text-white p-2 bg-secondary">
            <div class="card-body">

              <h1>Add Contact</h1>

                <div class="form-group" className="new-contact-form">
                  <label>Name</label>
                  <input className="form-control" placeholder="Name"
                    value={this.state.name}
                    onChange={event => this.setState({name:   event.target.value})}/>
                </div>

                <div class="form-group" className="new-contact-form">
                  <label>Email</label>
                  <input
                    className="form-control" placeholder="Email"
                    value={this.state.email}
                    onChange={event => this.setState({email: event.target.value})}/>
                </div>

                <div class="form-group" className="new-contact-form">
                  <label>Phone</label>
                  <input
                    className="form-control"
                    placeholder="Phone"
                    value={this.state.phone}
                    onChange={event => this.setState({phone:event.target.value})}/>
                </div>

                <div class="form-group" className="new-contact-form">
                  <label>Image Url</label>
                    <input
                    className="form-control" placeholder="Image"
                    value={this.state.image}
                    onChange={event => this.setState({image:event.target.value})}/>
                </div>

                    <button onClick={this.handleClick} type="button" className="btn btn-primary add-new-contact">Add Contact</button>

                    </div>
                  <div class="col-2"> </div>
                </div>
              </div>
            </div>
          </div>
      </div>

    );
  }
}

export default NewContactForm;
