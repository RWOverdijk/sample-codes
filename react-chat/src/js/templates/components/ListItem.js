import React from 'react';

export default React.createClass({
  
  render() {
    return(
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
    );
  }
});