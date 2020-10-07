import React from 'react';
import customers from "./customers.json";
import CustomerDetails from './CustomerDetails';
import CustomerForm from './CustomerForm';

class CustomerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: customers,
      selectedCustomer: null
    };
    
    this.onCustomerSelect = this.onCustomerSelect.bind(this);
    this.addCustomer = this.addCustomer.bind(this);
  }
  
  onCustomerSelect(e, customer) {
    console.log(customer);
    this.setState({
      selectedCustomer: customer 
    })
  } 

  tabRow() {
    const tableRows =  this.state.customers.map((customer) => {
      return (
        <tr onClick={e => this.onCustomerSelect(e, customer)} key={customer.id}>
          <td> { customer.id } </td>
          <td> { customer.firstName } </td>
          <td> { customer.lastName } </td>
          <td> { customer.email } </td>
        </tr>
      );
    });

    return tableRows;
  }

  addCustomer(newCustomer) {
    const totalCustomers = this.state.customers.length;
    newCustomer.id = totalCustomers + 1;
    let newList = [...this.state.customers];
    console.log("Im inside the addCustomer method -- new Customer Object :", newCustomer);
    newList.push(newCustomer);
    this.setState({
      customers: newList
    });
  }

  render() {
    return (
      <div>
        <h3>Customers List</h3>
        <table className="table table-hover table-bordered table-sm" >
          <thead className="thead-light">
            <tr onSelect={this.showCustomer}>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6">
            <CustomerForm addCustomer={this.addCustomer} />
          </div>
          <div className="col-md-2">
          </div>
          <div className="col-md-4">
            { this.state.selectedCustomer ? <CustomerDetails message={"sample data"} customer={this.state.selectedCustomer} /> : null }
          </div>

        </div>
        
      </div>
    );
  }
}

export default CustomerList;
