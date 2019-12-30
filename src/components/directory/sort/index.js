import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSortedCharacters } from '../../../services/api/charactersApi';
import Selectbox from '../../selectbox';

const sortBy = [
    { value: '', label: 'Select ID' },
    { value: 'asc', label: 'Assending' },
    { value: 'desc', label: 'Descending' }
];


class Sort extends Component {
    static propTypes = {
        getSortedCharacters: PropTypes.func.isRequired,
        sort: PropTypes.string.isRequired
    }

    handleSort = value => {
        this.props.getSortedCharacters(this.props.characters, value);
    }

    render() {
        return (
            <div className="sort">
                Sort by
                <Selectbox options={sortBy} handleOnChange={this.handleSort} />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    type: state.sort.type
});



export default connect(mapStateToProps, {getSortedCharacters})(Sort);