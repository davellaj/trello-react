require('babel-polyfill')
import React from 'react'
import ReactDOM  from 'react-dom'

import Board from './components/board'

document.addEventListener('DOMContentLoaded', () => {
  // const elem = <Board title='Board Title' />
  ReactDOM.render(<Board />, document.getElementById('app'))
})
