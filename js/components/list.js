import React from 'react'
import ReactDOM from 'react-dom'

import Card from './card.js'



export default function List (props) {
	console.log(props, "list")
  // map out 'cards' to individual card(s)?
  const cardsArr = props.cards.map((cardElm, index) => {
 	return <Card text={cardElm} key={index}/>
  }) 
  
  return (
    <div>
      <h4>{props.theme}</h4>
      <h3>{cardsArr}</h3>
   
    </div>
  )
}

// List.defaultProps = {
//   title: 'Default-To-do List',
//   cards: <Card />
// }

