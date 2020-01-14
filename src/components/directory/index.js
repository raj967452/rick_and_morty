import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCharacters } from '../../services/api/charactersApi';
import { sortArgsForFilter } from '../../services/store/sort/actions';
import { filterSelector } from '../../services/selectors/filtersSelector';

import Items from './items';
import Filters from './filters';
import DirectoryHeader from './directoryHeader';
import Paginator from '../paginator'
import Loader from '../loader';

import './style.scss';


class Directory extends Component {
    static propTypes = {
        fetchCharacter: PropTypes.func.isRequired
    }
    state = {
        pageOfCharacter: 1
    };  
    componentDidMount() {
        this.handleFetchCharacters(`/character?page=${this.props.pageOfCharacter}`);
    }
    handleFetchCharacters = (url) => {
        this.props.fetchCharacter(url);
    }
    
    onChangePage = pageOfCharacter => this.props.fetchCharacter(`/character?page=${pageOfCharacter}`);

    render() {

        const { characters, pending, paginatorData } = this.props;
        const character = characters.map(char => (<Items character={char} key={char.id} />));
        return (
            <React.Fragment>
                {pending && <Loader />}
                <div className="row directory-container">
                    <div className="col-sm-4 col-md-3 col-xs-12">
                        <Filters />
                    </div>
                    <div className="col-sm-8 col-md-9 col-xs-12">
                        {paginatorData && <DirectoryHeader charactersLength={paginatorData.count} />}
                        <div className="clearfix"></div>
                        <div className="row">
                            {character}
                        </div>
                        {paginatorData && <Paginator {...this.props} onChangePage={this.onChangePage} />}
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