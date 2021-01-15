import React from 'react';
import FiltersSearchPanel from '../filters-search-panel';
import FiltersStatus from '../filters-status';

const Filters = ({ onSearchCange }) => {
	
		return (
			<div className='d-flex justify-content-between my-3'>
				<FiltersSearchPanel 
					onSearch={onSearchCange}/>
				<FiltersStatus />
			</div>
		);
};

export default Filters;
