import React from 'react';
import ReactDOM from 'react-dom';

export default class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      cards: []
    }
  }

  render() {
    <List
      cards={cards}
      onChange={props.onAddInputChanged}
      onSubmit={props.onAddSubmit}
      />
  }
}
