import React from 'react'
import ReactDOM from 'react-dom'

import Card from './card.js'

export default function List (props) {
  return (
    <div>
      <h3>{this.props.title}</h3>
      <div>{this.props.cards}</div>
    </div>
  )
}

List.defaultProps = {
  title: 'To-do List'
}
