import React from 'react'
import ReactDOM from 'react-dom'

export default function Card (props) {
	//console.log(props, "card")

  return (
    <div>{props.text}</div>
  );
}

Card.defaultProps = {
  text: 'default-To-do card'
}
