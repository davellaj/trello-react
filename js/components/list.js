import React from 'react'
import ReactDOM from 'react-dom'

import Card from './card.js'

export default function List (props) {
  // map out 'cards' to individual card(s)?
  const cardsArr = props.cards.map((cardElm) => {
  	return <Card title={cardElm} />
  }) 
  
  return (
    <div>
      <h3>{props.title}</h3>
      <div>{props.cards}</div>
    </div>
  )
}

List.defaultProps = {
  title: 'Default-To-do List',
  cards: <Card />
}
