import React from 'react';

export default class ListItem extends React.Component{

  render() {
    return(
    	<div className="row">
	    	{(() => {
		        switch (this.props.data.own) {
		          case true:   return <div className="msg usermsg col-xs-4 col-sm-4 col-lg-4">{this.props.data.content}</div>;
		          case false: return <div className="msg contactmsg col-xs-4 col-sm-4 col-lg-4">{this.props.data.content}</div>;
		          default:      return <div className="msg hidden col-xs-4 col-sm-4 col-lg-4">{this.props.data.content}</div>;
		        }
	     	})()}
    	</div>
      );
  }
};