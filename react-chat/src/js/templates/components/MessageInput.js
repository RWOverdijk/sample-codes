import React from 'react';

export default class MessageInput extends React.Component{

  render() {
    return(
    	<div className="input-group">
            <input className="form-control input-sm chat_input" placeholder="Write your message here..." type="text"
               onChange= {this.props.updateNewMessage} value= {this.props.newMessage}/>
            <span className="input-group-btn">
                <button className="btn btn-success btn-sm" id="btn-chat" onClick={this.props.addMessage}>Send</button>
            </span>
        </div>
      );
  }
};