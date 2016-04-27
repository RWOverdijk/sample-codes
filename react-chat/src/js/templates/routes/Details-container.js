import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <Link to="/">
          <span className="glyphicon glyphicon-menu-left"></span>
          </Link>
        </div>
        <div className="panel-body">Panel Content</div>
      </div>
    )
  }
});