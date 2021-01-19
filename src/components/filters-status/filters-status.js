import React, { Component } from "react";

class FiltersStatus extends Component {
    render() {
        return (
            <div className='btn-group' role='group'>
                <button type='button' className='btn btn-outline-success'>
                    All
                </button>
                <button type='button' className='btn btn-outline-primary'>
                    Active
                </button>
                <button type='button' className='btn btn-outline-dark'>
                    Done
                </button>
            </div>
        );
    };
};

export default FiltersStatus;