import React from 'react';
import { Link } from 'react-router';

export default class ListItem extends React.Component{

  render() {
    return(
      <div className="row">
        <div className="col-md-3 col-lg-3">
          <img src="" className="avatar"/>
        </div>
        <div className="col-md-9 col-lg-9">
          <h5></h5>
          <table className="table">
            <tbody>
            <tr><td>Age:</td><td></td></tr>
            <tr><td>City:</td><td></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};