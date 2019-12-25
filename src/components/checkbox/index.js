import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        handleCheckboxChange: PropTypes.func.isRequired
    }

    state = {
        isChecked: false
    };
    toggleCheckboxChange = () => {
        const { handleCheckboxChange, label } = this.props;
        console.log("isChecked", this.state.isChecked);
        this.setState(({ isChecked }) => ({
            isChecked: !isChecked
        }));
        handleCheckboxChange(label);
    }

    render() {
        const { label } = this.props;
        const { isChecked } = this.state;
        return (
            <React.Fragment>
                <div className="checkbox form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value={label}
                        checked={isChecked}
                        onChange={this.toggleCheckboxChange}
                    />
                    <label className="form-check-label" >{label}</label>
                </div>
            </React.Fragment>
        )
    }
}
export default Checkbox;