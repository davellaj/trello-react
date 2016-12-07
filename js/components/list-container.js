import React from 'react'
import ReactDOM from 'react-dom'

import List from './list'

export default class ListContainer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			text: "",
			cards: []
		};
		this.onAddInputChanged = this.onAddInputChanged.bind(this);
		this.onAddSubmit = this.onAddSubmit.bind(this);
	}



onAddInputChanged(event) {
	//console.log(event)
  this.setState({text:event.target.value})
} 

onAddSubmit(event) {
  event.preventDefault();

    var newArray = this.state.cards;    
    newArray.push(this.state.text);   
    this.setState({cards:newArray})
    this.setState({text:""});
}

	render() {
		return (
			<List listTitle={this.props.theme} cards={this.state.cards} onInputChanged={this.onAddInputChanged} onSubmit={this.onAddSubmit} text={this.state.text}/>
		)
	}
}