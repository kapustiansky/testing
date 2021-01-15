import React from 'react';

import Filters from '../filters';
import './app-header.css'

const AppHeader = ({ toDo, done, onSearchCange }) => {
	return (
		<div>
			<i className="geek-totoro-2"></i>
			<div className="mb-2">
				more <span className="badge bg-dark mr-1">{toDo}</span>
				done <span className="badge bg-dark">{done}</span>
			</div>
			<Filters onSearchCange={onSearchCange}/>
		</div>
	);
}

export default AppHeader;