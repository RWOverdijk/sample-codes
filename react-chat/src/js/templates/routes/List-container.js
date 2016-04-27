import React from 'react';
import ListItem from '../components/ListItem.js';
import { Link } from 'react-router';

export default React.createClass({
  
  render() {
    
    var contacts = [{'name':'Laia', 'state':'Hallo mensen!', 'avatar': 'http://tinyurl.com/jj7jfht'},
                    {'name':'Pau', 'state':'Gezellig zijn', 'avatar': 'http://tinyurl.com/hezwkow'},
                    {'name':'Nuria', 'state':'Dit chat gebruik ik', 'avatar': 'http://tinyurl.com/gkrzqqo'},
                    {'name':'Bernat', 'state':'Ik droom soms', 'avatar': 'http://tinyurl.com/jr2lm9p'}];
    
    return (
      <ul className="list-group contacts-list">
        {contacts.map(function(contact, index){
          var name = contact.name;
          var link = "/chat/" + contact.name;
          return <Link to={link}>
                  <li className="list-group-item" key={ index }>
                    <ListItem avatar={contact.avatar} name={contact.name} state={contact.state}></ListItem>
                 </li>
                </Link>;
                  })}
      </ul>
    );
  }
});