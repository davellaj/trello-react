import React from 'react'
import ReactDOM from 'react-dom'

export default function Card (props) {
  return (
    <div>{this.props.text}</div>
  )
}

Card.defaultProps = {
  text: 'To-do item'
}
