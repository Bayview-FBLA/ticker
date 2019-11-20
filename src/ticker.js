import React from 'react';
import axios from 'axios';

export default class Ticker extends React.Component {
	
	pullData() {
		axios.get('http://worldclockapi.com/api/json/est/now')
		.then(response => {
			this.setState({
				response: response.data.currentFileTime
			});

			
			
			console.log(response.data.currentFileTime);
		})
	}

	constructor() {
		super();

		this.state = {
			response: "Loading..."
		};

		this.pullData = this.pullData.bind(this);
	}

	componentDidMount() {
		setInterval(this.pullData, 500	);
	}
	
	render() {
		return(
			<div>
				<p>{this.state.response}</p>
			</div>
		);
	}
}
