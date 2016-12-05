import React from 'react'
import ReactDOM from 'react-dom'

export default function Card (props) {

  return (
    <div>{props.text}</div>
  );
}

Card.defaultProps = {
  text: 'default-To-do item'
}
