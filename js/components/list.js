import React from 'react';
import ReactDOM from 'react-dom';

import Card from './card.js';

export default function List (props) {
  const cardsArr = props.cards.map((cardElem, index) => {
    const listItem = <li>{cardElem}</li>;
    return <Card text={listItem} key={index}/>
  })







  return (
    <div>
      <h4>{props.title}</h4>
      <ul>
        {cardsArr}
      </ul>
      <form onSubmit={props.onAddSubmit}>
        <input onChange={props.onAddInputChanged} type="text" />
        <input type="submit"/>
      </form>
    </div>



  )
}

// export defualt class List extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: 'doggy',
//       card: ['yep', 'another dog', 'hey another one'],
//     };
//     this.addCardName = this.addCardName.bind(this);
//     this.submitForm = this.submitForm.bind(this);
//   }
//   addCardName(event) {
//     this.setState(console.log('hayo'));
//   }

// }