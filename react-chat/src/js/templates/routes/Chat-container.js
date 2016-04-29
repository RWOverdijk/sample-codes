import React from 'react';
import { Link } from 'react-router';
import Message from '../components/Message.js';
import MessageInput from '../components/MessageInput.js';

export default class Chat extends React.Component{

  constructor(){
    super();
    this.state = {
      'messages': [{'time':'01/01/2016 10:20:45', 'content':'Halloooo', 'own': false},
      {'time':'01/01/2016 10:21:45', 'content':'Hoe was gisteren film?', 'own': false},
      {'time':'01/01/2016 10:21:50', 'content':'Ei', 'own': true},
      {'time':'01/01/2016 10:22:20', 'content':'pfff, heel saai', 'own': true},
      {'time':'01/01/2016 10:22:45', 'content':'echt ? Het is fantastisch!!', 'own': false}],
      'newMessage': ''
    }
  }

  updateNewMessage(event) {
    this.setState({'newMessage': event.target.value});
  }

  addMessage(message) {
    this.state.messages.push({'time': new Date(), 'content': this.state.newMessage, 'own': true});
    this.setState({
      'messages' : this.state.messages,
      'newMessage' : ''
    });
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
          {this.state.messages.map(function(message, index){
            return <Message key={index} data={message}></Message>
          })}
        </div>
        <div className="panel-footer">
          <MessageInput addMessage={this.addMessage.bind(this)} updateNewMessage={this.updateNewMessage.bind(this)} newMessage={this.state.newMessage}></MessageInput>
        </div>
      </div>
    )
  }
};