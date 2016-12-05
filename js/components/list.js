import React from 'react'
import ReactDOM from 'react-dom'

import Card from './card.js'

export default function List (props) {
  // map out 'cards' to individual card(s)?
  return (
    <div>
      <h3>{props.title}</h3>
      <div>{props.cards}</div>
    </div>
  )
}

List.defaultProps = {
  title: 'To-do List',
  cards: <Card />
}
