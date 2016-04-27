import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  
  render() {
    var contactName = this.props.params.name;
    var contactAvatar = this.props.params.avatar;
    
    var contactMessages = [{'time':'', 'content':'Bones'},{'time':'', 'content':'Que et va semblar la pelicula?'},{'time':'', 'content':'Si, a mi tambe'}];
    var userMessages = [{'time':'', 'content':'Ei'},{'time':'', 'content':'pfff, aburrida'}];
    var contactDetails = "/details/" + contactName ;

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <Link to="/">
          <span className="glyphicon glyphicon-menu-left"></span>
          </Link>
          <Link to={contactDetails}>
          <img src={this.props.params.avatar} className="avatar"/>
          <span>{contactName}</span>
          </Link>
        </div>
        <div className="panel-body">Panel Content</div>
        <div className="panel-footer">
          <div className="input-group">
               <input className="form-control input-sm chat_input" placeholder="Write your message here..." type="text"/>
               <span className="input-group-btn">
                  <button className="btn btn-success btn-sm" id="btn-chat">Send</button>
               </span>
          </div>
        </div>
      </div>
    )
  }
});