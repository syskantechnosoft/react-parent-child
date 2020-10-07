import React from "react";

class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(evt) {
    const firstName = evt.target.value;
    this.setState({
      firstName: firstName
    });
  }

  handleLastNameChange(evt) {
    const lastName = evt.target.value;
    this.setState({
      lastName: lastName
    });
  }

  handleEmailChange(evt) {
    const email = evt.target.value;
    this.setState({
      email: email
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    
    const newCustomer = this.state;
    console.log("new customer object data :", newCustomer);
    this.props.addCustomer(newCustomer);
    
    this.setState({
        firstName: '',
        lastName: '',
        email: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Add Customer</h3>
        <hr/>
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CustomerForm;
