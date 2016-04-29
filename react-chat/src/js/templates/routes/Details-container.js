import React from 'react';
import { Link } from 'react-router';
import ContacDetails from '../components/ContactDetails.js';

export default class Details extends React.Component{
  
  render() {
    var contactName = this.props.params.name;
    
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <Link to="/">
          <span className="glyphicon glyphicon-menu-left"></span>
          </Link>
          <span>{contactName}</span>
        </div>
        <div className="panel-body">
          <ContacDetails></ContacDetails>
        </div>
      </div>
    )
  }
};