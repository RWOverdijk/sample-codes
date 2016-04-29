import React from 'react';
import { Link } from 'react-router';

export default class ListItem extends React.Component{

  render() {
    var link = "/chat/" + this.props.name;
    return(
      <Link to={link}>
        <li className="list-group-item">
          <div className="row">
            <div className="col-md-1">
              <img src={this.props.avatar} className="avatar"/>
            </div>
            <div className="col-md-3">
              <h4>
                {this.props.name}
              </h4>
              <p>
                {this.props.state}
              </p>
            </div>
          </div>
        </li>
      </Link>
      );
  }
};