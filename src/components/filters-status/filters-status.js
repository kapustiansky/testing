import React, { Component } from "react";

class FiltersStatus extends Component {
    render() {
        return (
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
        );
    };
};

export default FiltersStatus;