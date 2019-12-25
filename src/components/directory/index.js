import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchCharacter } from '../../services/characters/actions';
import Items from './items';
import Filters from './filters';
import DirectoryHeader from './directoryHeader';
import Loader from '../loader';

import './style.scss';


class Directory extends Component {
    static propTypes = {
        fetchCharacter: PropTypes.func.isRequired,
        characters: PropTypes.array.isRequired,
        filters: PropTypes.array,
        sort: PropTypes.string
    }

    state = {
        loading: false
    };

    componentDidMount() {
        this.handleFetchCharacters();
    }
    componentWillReceiveProps(nextProps) {
        const { filters: nextFilters, sort: nextSort } = nextProps;
        if (nextFilters !== this.props.filters) {
            this.handleFetchCharacters(nextFilters, undefined);
        }
        if (nextSort !== this.props.sort) {
            this.handleFetchCharacters(undefined, nextSort);
        }
    }

    handleFetchCharacters = (filters = this.props.filters, sort = this.props.sort) => {
        this.setState({ loading: true });
        this.props.fetchCharacter(filters, sort, () => {
            this.setState({ loading: false });
        })
    }
    render() {

        const { characters } = this.props;
        const character = characters.map(char => {
            return (
                <Items character={char} key={char.id} />
            );
        });


        return (
            <React.Fragment>
                {this.state.loading && <Loader />}
                <div className="row directory-container">
                    <div className="col-3 col-xs-12">
                        <Filters />
                    </div>
                    <div className="col-9 col-xs-12">
                        <DirectoryHeader charactersLength={characters.length} />
                        <div class="clearfix"></div>
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
    characters: state.characters.chatacters,
    filters: state.filters.items,
    sort: state.sort.type
})
export default connect(mapStateToProps, { fetchCharacter })(Directory);