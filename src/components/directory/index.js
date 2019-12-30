import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { fetchCharacter } from '../../services/characters/actions';
import { getCharacters } from '../../services/api/charactersApi';
import Items from './items';
import Filters from './filters';
import DirectoryHeader from './directoryHeader';
import Loader from '../loader';

import { orderByFilter } from '../../services/pipes/orderByFilter';

import './style.scss';


class Directory extends Component {
    static propTypes = {
        fetchCharacter: PropTypes.func.isRequired,
        characters: PropTypes.array.isRequired,
        filters: PropTypes.array,
        sort: PropTypes.string,
        pending: PropTypes.bool.isRequired
    }
    componentDidMount() {
        this.handleFetchCharacters();
    }
    
    componentWillReceiveProps(nextProps) {
        const { filters: nextFilters, sort: nextSort } = nextProps;
        if (nextFilters !== this.props.filters) {
           // this.handleFetchCharacters(nextFilters, undefined);
        }
        if (nextSort !== this.props.sort) {
            this.setState({
                characters: this.props.characters
            })
            //this.handleFetchCharacters(undefined, nextSort);
        }
    }

    handleFetchCharacters = (filters = this.props.filters, sort = this.props.sort) => {
        this.props.fetchCharacter();
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


const mapStateToProps = state => ({
    pending: state.characters.pending,
    characters: state.characters.chatacters,
    filters: state.filters.items,
    sort: state.sort.type
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchCharacter: getCharacters
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Directory);