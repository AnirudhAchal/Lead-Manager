import React, { Component, Fragment } from "react";

class LeadFormView extends Component {
  render() {
    return (
      <Fragment>
        <form>
          <div className="form-group">
            <label htmlFor="leadUsername">Username</label>
            <input
              type="text"
              className="form-control"
              id="leadUsername"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="leadEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="leadEmail"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="leadMessage">Message</label>
            <input
              type="text"
              className="form-control"
              id="leadMessage"
              placeholder="Enter message"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Fragment>
    );
  }
}

export default LeadFormView;
