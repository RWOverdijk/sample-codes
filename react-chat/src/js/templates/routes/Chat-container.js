import React from 'react';
import { Link } from 'react-router';
import Message from '../components/Message.js';

export default class Chat extends React.Component{

  constructor(){
    super();
    this.sate = {
      'messages': [{'time':'01/01/2016 10:20:45', 'content':'Halloooo', 'own': false},
      {'time':'01/01/2016 10:21:45', 'content':'Hoe was gisteren film?', 'own': false},
      {'time':'01/01/2016 10:21:50', 'content':'Ei', 'own': true},
      {'time':'01/01/2016 10:22:20', 'content':'pfff, heel saai', 'own': true},
      {'time':'01/01/2016 10:22:45', 'content':'echt ? Het is fantastisch!!', 'own': false}]
    }
  }
  
  render() {
    var contactName = this.props.params.name;
    var contactAvatar = this.props.params.avatar;
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
        <div className="panel-body">
          {this.sate.messages.map(function(message, index){
            return <Message key={index} data={message}></Message>
          })}
        </div>
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
};