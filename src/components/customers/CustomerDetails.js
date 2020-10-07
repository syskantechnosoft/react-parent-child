import React from 'react';

function CustomerDetails(props) {
    const customer = props.customer;
    const message = props.message;
    
    return (
      <div>
        <h3>Customer Details</h3>
        <hr/>
        <p>ID : {customer.id} </p>
        <p>First Name : {customer.firstName} </p>
        <p>Last Name: {customer.lastName} </p>
        <p>Email: {customer.email} </p> 
        <p> Message from Props : {message}</p>
      </div>
    );
}

export default CustomerDetails;
