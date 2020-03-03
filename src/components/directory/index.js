import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCharacters } from '../../services/api/charactersApi';
import { sortArgsForFilter } from '../../services/store/sort/actions';
import { filterSelector } from '../../services/selectors/filtersSelector';

import Items from './items';
import DirectoryHeader from './directoryHeader';
import Paginator from '../paginator';
import './style.scss';

class Directory extends Component {
    static propTypes = {
        fetchCharacter: PropTypes.func.isRequired,
        pageOfCharacter: PropTypes.number
    }
    constructor() {
        super();
        this.state = {
            pageOfCharacter: 1
        }
    }
    componentDidMount() {
        this.handleFetchCharacters(`/character/?page=${this.state.pageOfCharacter}`);
    }
    handleFetchCharacters = (url) => {
        this.props.fetchCharacter(url);
    }
    render() {
        const { characters, paginatorData } = this.props;
        const character = characters.map(char => (<Items character={char} key={char.id} />));
        return (
            <React.Fragment>
                <div className="row directory-container">
                    <div className="col-sm-12 col-xs-12">
                        {paginatorData && <DirectoryHeader charactersLength={paginatorData.count} />}
                        <div className="clearfix"></div>
                        <div className="row">
                            {character}
                        </div>
                        {paginatorData && <Paginator {...this.props} />}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    const { characterSuccess, sortArgsForFilter, paginatorData, pending } = state;
    return {
        pending: pending,
        characters: characterSuccess.fetchedData,
        paginatorData: paginatorData.paginatorInfo,
        FilteredSortedList: filterSelector(state),
        sortArgsForFilter
    }
}
const mapDispatchToProps = dispatch => ({
    fetchCharacter: (url) => dispatch(getCharacters(url)),
    sortArgsForFilter
});

export default connect(mapStateToProps, mapDispatchToProps)(Directory);