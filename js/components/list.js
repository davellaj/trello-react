import React from 'react'
import ReactDOM from 'react-dom'

import Card from './card.js'



export default function List (props) {
	//console.log(props, "list")
  const cardsArr = props.cards.map((cardElem, index) => {
 	return <Card text={cardElem} key={index}/>
  }) 

  return (
    <div>
      <h4>{props.listTitle}</h4>
      <h3>{cardsArr}</h3>
      <form onSubmit={props.onSubmit}>
      <input type="text" value={props.text} onChange={props.onInputChanged}/>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

List.defaultProps = {
  theme: 'Default-To-do List',
  cards: [<Card />]
}

