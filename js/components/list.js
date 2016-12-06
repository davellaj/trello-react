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
      <h4>{props.theme}</h4>
      <h3>{cardsArr}</h3>
    </div>
  )
}

List.defaultProps = {
  theme: 'Default-To-do List',
  cards: [<Card />]
}

