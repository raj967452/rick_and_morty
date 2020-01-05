import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCharacters } from '../../services/api/charactersApi';
import { sortArgsForFilter } from '../../services/store/sort/actions';
import { filterSelector } from '../../services/selectors/filtersSelector';

import Items from './items';
import Filters from './filters';
import DirectoryHeader from './directoryHeader';
import Loader from '../loader';

import './style.scss';


class Directory extends Component {
    static propTypes = {
        fetchCharacter: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.handleFetchCharacters('/character');
    }

    handleFetchCharacters = (url) => {
        this.props.fetchCharacter(url);
    }
    render() {

        const { characters, pending } = this.props;

        const character = characters.map(char => (<Items character={char} key={char.id} />));

        return (
            <React.Fragment>
                {pending && <Loader />}
                <div className="row directory-container">
                    <div className="col-sm-4 col-md-3 col-xs-12">
                        <Filters />
                    </div>
                    <div className="col-sm-8 col-md-9 col-xs-12">
                        <DirectoryHeader charactersLength={characters.length} />
                        <div className="clearfix"></div>
                        <div className="row">
                            {character}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    const { characterSuccess, sortArgsForFilter } = state;
    return {
        characters: characterSuccess.fetchedData,
        FilteredSortedList: filterSelector(state),
        sortArgsForFilter
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCharacter: (url) => dispatch(getCharacters(url)),
    sortArgsForFilter
});

export default connect(mapStateToProps, mapDispatchToProps)(Directory);