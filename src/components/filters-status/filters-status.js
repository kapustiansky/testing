import React, { Component } from "react";

class FiltersStatus extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'active', label: 'Active'},
            {name: 'done', label: 'Done'}
        ]
    }

    render() {
        const {filterData} = this.props;
        const {filter, onFilterChange} = filterData;
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-dark' : 'btn-outline-dark';
            return (
                <button 
                    key={name} 
                    type='button' 
                    className={`btn ${clazz}`}
                    onClick={() => onFilterChange(name)}>
                    {label}
                </button>
            );
        })
        return (
            <div className='btn-group' role='group'>
                {buttons}
            </div>
        )
    };
};

export default FiltersStatus;