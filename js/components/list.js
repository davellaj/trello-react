import React from 'react'
import ReactDOM from 'react-dom'

import Card from './card.js'

export default function List () {
  // map out 'cards' to individual card(s)?
  return (
    <div>
      <Card />
      // <h3>{this.props.title}</h3>
      // <div>{this.props.cards}</div>
    </div>
  )
}

List.defaultProps = {
  title: 'To-do List',
  cards: <Card />
}
