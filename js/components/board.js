import React from 'react'
import ReactDOM from 'react-dom'

import List from './list.js'

export default function Board () {
  return (
    <div>
      <List />
      // <h2>{this.props.title}</h2>
      // <div>{this.props.lists}</div>
    </div>
  )
}

// List.defaultProps = {
//   title: 'Board',
//   cards: <List />
// }
