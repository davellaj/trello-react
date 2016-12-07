import React from 'react'
import ReactDOM from 'react-dom'

import ListContainer from './list-container'

export default function Board (props) {
  //console.log(props, "Board")
  const eachList = props.lists.map((listElem, index) => {
    return (
    <ListContainer theme={listElem} key={index}/>
    )
  });

  return (
    <div>
      <h2>{props.title}</h2>
      <ul>{eachList}</ul>
    </div>
  );
}

Board.defaultProps = {
  title: 'Default-Board',
  lists: ['Default-One', 'Default-Two']
}

