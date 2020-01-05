import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateFilters } from '../../../../services/store/filters/actions';
import Checkbox from '../../../checkbox';

const Gender = ["Male", "Female", "unknown"];

class GenderFilter extends Component {
    static propTypes = {
        updateFilters: PropTypes.func.isRequired,
        filters: PropTypes.array
    };
    componentDidMount() {
        this.selectedFilter = new Set();
    }

    toggleCheckbox = label => {
        this.selectedFilter.has(label) ? this.selectedFilter.delete(label) : this.selectedFilter.add(label);
        this.props.updateFilters(Array.from(this.selectedFilter))
    }

    createCheckbox = label => (
        <Checkbox
            classes="filters-gender"
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
    );
    createCheckboxes = () => Gender.map(this.createCheckbox);
    render() {
        return (
            <React.Fragment>
                <h5>Gender</h5>
                {this.createCheckboxes()}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    filters: state.filtersSuccess.items
  });

  
export default connect( mapStateToProps,{ updateFilters })(GenderFilter);