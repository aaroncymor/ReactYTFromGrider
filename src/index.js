import _ from 'lodash';
import React, { Component } from 'react'; //Core React Library - knows how to render Components
import ReactDOM from 'react-dom'; // Focused on rendering Components to DOM.
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // Coming from export default SearchBar @ search_bar.js
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// const is an es2016 syntax, similar to 'var'.
// const declartion means it's final. it's not going to change.
const API_KEY = 'AIzaSyAGCH32ZAdaGVQmfHxzVr4dQsyHtEibxKk';

// Create a new component. 
// This component should produce some HTML
class App extends Component { //Base component

	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('dota 2')
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});	
	}

	render () {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
		return (
			<div> 
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} 
				/>
			</div>
		);
	}
};
// Take this component's generated HTML
// and put in on the page (in the DOM)

//Pass an Instance of app '<App />'
ReactDOM.render(<App />, document.querySelector('.container')); //React is not defined