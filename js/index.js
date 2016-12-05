require('babel-polyfill')
import React from 'react'
import ReactDOM  from 'react-dom'

import Board from './components/board'

document.addEventListener('DOMContentLoaded', () => {
  // const elem = <Board title='Board Title' />
  const boardTitle = 'My First Board'
  const lists = ['First List', 'Second List', 'Third List']
  ReactDOM.render(
    <Board title={boardTitle} lists={lists} />,
    document.getElementById('app'))
})
