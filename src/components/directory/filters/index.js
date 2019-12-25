import React, { Component } from 'react';

const GenderFilter = React.lazy(() => import('./genderFilter'));
const OriginFilter = React.lazy(() => import('./originFilter'));
const SpeciesFilter = React.lazy(() => import('./speciesFilter'));

class Filters extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="filters">
                    <h2>Filters</h2>
                    <GenderFilter />
                    <OriginFilter />
                    <SpeciesFilter />
                </div>
            </React.Fragment>
        )
    }
}

export default Filters;