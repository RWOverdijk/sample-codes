import React from 'react';
import NavBar from '../components/layouts/NavBar.js'

export default React.createClass({
  
  render() {
    return(
      <div>
        <NavBar />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});