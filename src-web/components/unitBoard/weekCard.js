import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import database from '../../data';

class WeekCard extends Component {
  render() {
    return (
      <Link
        to={"/home/sidebar/" + this.props.unitName + "/" + this.props.branchId}
        style={{ textDecoration: "none" }}
      >
        <div
          style={{ width: "100%", transition: "all 0.1s ease-in-out" }}
          className="border-2 rounded border-light-grey p-4 my-2 hover:shadow-md weekcard"
        >
          <div>
            <div className="brow mb-3" style={{backgroundColor:this.props.color}} />
            <div className="text-grey-darkest font-medium text-lg">
              {this.props.weekName}
            </div>
          </div>
          <div
            style={{
              width: "fit-content",
              marginLeft: "auto",
              marginRight: "0px"
            }}
            className="self-end mt-2"
          >
            <span className="px-3 py-1 text-sm font-semibold text-grey">
              Files: {database.getAllAttachments(this.props.data).length}
            </span>
          </div>
        </div>
      </Link>
    );
  }
}

export default WeekCard;
