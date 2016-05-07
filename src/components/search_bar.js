import React, { Component } from 'react';

// Class Component - internal class rendering

// Define new class SearchBar and give it all 
// functionalities from React.Component class
class SearchBar extends Component {
	//Only in constructor you can make changes to the state.
	constructor(props){
		super(props);

		this.state = {term:''};
	}
	// render - Every react component we create
	// that's class based must have a render method.
	render() {
		return (
			<div className="search-bar">
				<input 
					//We told that value of input is {this.state.term}
					value = {this.state.term} //This makes input a controlled component. It's value changes when state changes.
					onChange = {event => this.onInputChange(event.target.value)} 
				/>
			</div>
		);
	}


	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

// Any file in our app that imports searchbar,
// will get our SearchBar component.
export default SearchBar;