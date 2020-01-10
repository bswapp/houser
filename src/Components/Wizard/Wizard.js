import React, { Component } from "react";
import { Link } from "react-router-dom";
import wizardRoutes from "./wizardRoutes";
import store, { clearStore } from "../../ducks/store";
import "../Wizard/Wizard.css";

class Wizard extends Component {
  cancel = e => {
    store.dispatch({
      type: clearStore
    });
  };

  render() {
    return (
      <div>
        <div className="wizard-header">
          <h2>Add A New Listing</h2>
          <Link to="/">
            <button onClick={() => this.clearStore()}>Cancel</button>
          </Link>
        </div>
        {wizardRoutes}
      </div>
    );
  }
}
export default Wizard;
