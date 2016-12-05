require('babel-polyfill')
import React from 'react'
import ReactDOM  from 'react-dom'

import Board from './components/board'

const boardState = {
	title: "My board title",
	lists: [
		{
			title: 'List 1',
			card: ['groceries', 'laundry', 'make chores']
		},
		{
			title: 'List 2',
			card: ['groceries', 'laundry', 'make chores']
		},
		{
			title: 'List 3',
			card: ['groceries', 'laundry', 'make chores']
		}
	]
}

document.addEventListener('DOMContentLoaded', () => {
  const boardTitle = 'My First Board'
  const lists = ['First List', 'Second List', 'Third List']
  ReactDOM.render(
    <Board title={boardTitle} lists={lists} />,
    document.getElementById('app'))
})
