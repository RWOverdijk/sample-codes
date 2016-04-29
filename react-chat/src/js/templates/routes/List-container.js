import React from 'react';
import ListItem from '../components/ListItem.js';


export default class List extends React.Component{

  constructor(){
    super();
    this.sate = {
      'contacts': [{'id': 1, 'name':'Laia', 'state':'Hallo mensen!', 'avatar': 'http://tinyurl.com/jj7jfht'},
      {'id': 2, 'name':'Pau', 'state':'Gezellig zijn', 'avatar': 'http://tinyurl.com/hezwkow'},
      {'id': 3, 'name':'Nuria', 'state':'Dit chat gebruik ik', 'avatar': 'http://tinyurl.com/gkrzqqo'},
      {'id': 4, 'name':'Bernat', 'state':'Ik droom soms', 'avatar': 'http://tinyurl.com/jr2lm9p'}]
    }
  }
  
  render() {

    return (
      <ul className="list-group contacts-list">
        {this.sate.contacts.map(function(contact, index){
          return <ListItem key={contact.id} avatar={contact.avatar} name={contact.name} state={contact.state}></ListItem>
        })}
      </ul>
      );
  }
};