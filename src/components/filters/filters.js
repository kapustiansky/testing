import React from 'react';
import FiltersSearchPanel from '../filters-search-panel';
import FiltersStatus from '../filters-status';

const Filters = ({ filters }) => {
		const { onSearchChange, ...items } = filters;
		return (
			<div className='d-flex justify-content-between my-3'>
				<FiltersSearchPanel 
					onSearch={onSearchChange}/>
				<FiltersStatus 
					filterData={items}/>
			</div>
		);
};

export default Filters;
