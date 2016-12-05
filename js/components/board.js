import React from 'react'
import ReactDOM from 'react-dom'

import List from './list.js'

export default function Board (props) {
  const eachList = props.lists.map((listElem) => {
    return <List title={listElem}/>
  })
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>{eachList}</ul>
    </div>
  );
}

List.defaultProps = {
  title: 'Board',
  cards: <List />
}
