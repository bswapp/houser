import React, { Component } from "react";

class House extends Component {
  render() {
    return (
      <div className="list">
        <div className="textbox">
          <div className="buttonbox">
            <button
              className="xbutton"
              onClick={() => this.props.deleteHouse(this.props.id)}
            >
              Delete
            </button>
          </div>

          <h2>{this.props.name}</h2>
          <p>{`Address: ${this.props.address}`}</p>
          <p>{`City: ${this.props.city}`}</p>
          <p>{`State: ${this.props.state}`}</p>
          <p>{`Zip: ${this.props.zip}`}</p>
          <img
            className="preview"
            alt="house preview"
            src={
              this.props.img
                ? this.props.img
                : "http://securitysolutionsdubai.com/wp-content/uploads/2016/04/dummy-post-horisontal-thegem-blog-default-medium.jpg"
            }
          />
          <p>{`Monthly Mortgage: ${this.props.mortgage}`}</p>
          <p>{`Rent: ${this.props.rent}`}</p>
        </div>
      </div>
    );
  }
}

export default House;
