import React, { Component } from 'react';

import SearchPanel from '../search-panel';

class ItemStatusFilter extends Component {

	render() {
		return (
			<div className='d-flex justify-content-between my-3'>
				<SearchPanel />
				<div className='btn-group' role='group'>
					<button type='button' className='btn btn-outline-primary'>
						All
					</button>
					<button type='button' className='btn btn-outline-danger'>
						Active
					</button>
					<button type='button' className='btn btn-outline-success'>
						Done
					</button>
				</div>
			</div>
		);
	}
};

export default ItemStatusFilter;
