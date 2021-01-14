import React from 'react';

import ItemStatusFilter from '../item-status-filter';
import './app-header.css'

const AppHeader = ({toDo, done}) => {
	return (
		<div>
			<i className="geek-totoro-2"></i>
			<div className="mb-2">
				more <span className="badge bg-dark mr-1">{toDo}</span>
				done <span className="badge bg-dark">{done}</span>
			</div>
			<ItemStatusFilter />
		</div>
	);
}

export default AppHeader;