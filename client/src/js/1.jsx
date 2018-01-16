import React from "react";
import {Link} from "react-router-dom";
import Select from 'react-select';
import moment from 'moment';
import _ from "lodash";

class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: (this.props.customer && this.props.customer.firstName) || "",
      lastName: (this.props.customer && this.props.customer.lastName) || "",
      customersTripsID: (this.props.customer && this.props.customer.customersTripsID) || []
    }
  }

  getCustomersTripsID = (item) => {
    let selTripId = item.value;
    this.setState(({customersTripsID}) =>
      ({customersTripsID: [...customersTripsID, selTripId]})
    );
  };

  customerTripsTable = (customersTripsID, trips) => {
    let arrTrips = Object.values(trips);
    return (
      <table className="customerTripsTable">
        <thead>
        <tr>
          <th>All travels of the customer</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {customersTripsID.map((id, index) => {
          for (let i = 0; i < arrTrips.length; i++) {
            if (id !== arrTrips[i].id) continue;
            return <tr key={id}>
              <td>{`${trips[id].tripName} - ${moment(trips[id].dateDeparture).format("DD-MM-YYYY")}`}</td>
              <td>
                <button className="del" onClick={e => {
                  e.preventDefault();
                  let arr = customersTripsID;
                  arr.splice(index, 1);
                  this.setState({
                    customersTripsID: arr
                  })
                }}>X
                </button>
              </td>
            </tr>
          }
        })}
        </tbody>
      </table>
    )
  };

  select = (trips) => {
    const arr = _.without(Object.keys(trips), ...this.state.customersTripsID);
    return arr.map(id => {
      return {
        label: `${trips[id].tripName} - ${moment(trips[id].dateDeparture).format("DD-MM-YYYY")}`,
        value: trips[id].id
      }
    });
  };

  render() {
    let trips = this.props.trips.listTrips;
    let tableTrips = this.customerTripsTable(this.state.customersTripsID, trips);
    return (
      <div className="customersForm">
        <form>
          <p>
            <label htmlFor="firstName">Enter your name:</label>
            <input type="text" name="firstName" id="firstName" title="firstName" required
                   onChange={e => this.setState({firstName: e.target.value})}
                   value={this.state.firstName}
            />
          </p>
          <p>
            <label htmlFor="lastName">Enter last name:</label>
            <input type="text" name="lastName" id="lastName" title="lastName" required
                   onChange={e => this.setState({lastName: e.target.value})}
                   value={this.state.lastName}
            />
          </p>
          <label htmlFor="customersTrips">Choose a trip:</label>
          <Select
            options={this.select(trips)}
            placeholder={"Search"}
            onChange={item => {
              this.getCustomersTripsID(item);
            }}
          />
        </form>
        <div className="customersButtons">
          <Link className="save"
                to={this.props.returnUrl}
                onClick={() => {
                  this.props.onSaveCustomer({
                    id: (this.props.customer && this.props.customer.id) || null,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    customersTripsID: this.state.customersTripsID
                  })
                }}>Save
          </Link>
          <Link className="cancel" to={this.props.returnUrl}
                onClick={() => {
                  this.props.getCustomers();
                }}
          >Cancel</Link>
        </div>
        {tableTrips}
      </div>
    )
  }
}

export default CustomerForm;