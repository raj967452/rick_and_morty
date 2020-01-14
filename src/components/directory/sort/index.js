import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getSortedCharacters } from '../../../services/api/charactersApi';
import Selectbox from '../../selectbox';

const sortBy = [
    { value: 'none', label: 'Select ID' },
    { value: 'asc', label: 'Assending' },
    { value: 'desc', label: 'Descending' }
];
class Sort extends PureComponent {
    handleSort = (type) => {
        this.props.handleSortData(type);
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
const mapDispatchToProps = dispatch => {
    return {
        handleSortData: (type) => dispatch(getSortedCharacters(type))
    }
}

/*
const doSort = (sort)=>(a,b)=>sort==="asc" ?a.name.localeCompare(b.name): b.name.localeCompare(a.name) )

 render() {

        const { characters, pending , filter, sort} = this.props;
        const data = characters.filter(c=> filter.includes(c.gender)).sort(this.doSort(sort))
        const character = data.map(char => (<Items character={char} key={char.id} />));

        return (

*/
export default connect(null, mapDispatchToProps)(Sort);