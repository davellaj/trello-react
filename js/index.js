require('babel-polyfill')
import React from 'react'
import ReactDOM  from 'react-dom'

import Board from './components/board'

const boardState = {
	title: "My board title",
	lists: ["Allen's List", "Theresa's List", "Chris' List"]
}

document.addEventListener('DOMContentLoaded', () => {
  //const boardTitle = 'My First Board'
  //const lists = ['First List', 'Second List', 'Third List']
  ReactDOM.render(
    <Board title={boardState.title} lists={boardState.lists} />,
    document.getElementById('app'))
})

