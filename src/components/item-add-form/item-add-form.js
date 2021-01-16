import React, { Component } from 'react';

import './item-add-form.css';

class ItemAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			label: '',
		};
	}

	onLabelChange = (e) => {
		this.setState({
			label: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onAdd(this.state.label);
		this.setState({
			label: '',
		});
	};
	render() {
		return (
			<form className='d-flex justify-content-between my-3' onSubmit={this.onSubmit}>
				<input
					type='text'
					className='form-control w-75'
					placeholder='What i will do'
					value={this.state.label}
					onChange={this.onLabelChange}
				/>
				<button type='submit' className='btn btn-primary add-btn'>
					Add Task
				</button>
			</form>
		);
	}
}

export default ItemAddForm;
