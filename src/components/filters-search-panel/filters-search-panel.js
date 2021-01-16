import React, { Component } from 'react';

class FiltersSearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
		};
	}

	onChange = (e) => {
		const term = e.target.value;
		this.setState({ term });
		this.props.onSearch(term);
	};

	render() {
		return (
			<input
				className='form-control w-50'
				list='datalistOptions'
				placeholder='Search...'
				value={this.state.term}
				onChange={this.onChange}
			/>
		);
	}
}

export default FiltersSearchPanel;
