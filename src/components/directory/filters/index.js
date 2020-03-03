import React from 'react';
import DefaultModal from '../../modalHOC/modal';

const GenderFilter = React.lazy(() => import('./genderFilter'));
const OriginFilter = React.lazy(() => import('./originFilter'));
const SpeciesFilter = React.lazy(() => import('./speciesFilter'));

const Filters = () => (
    <DefaultModal
        viewComponent={
            ({toggleModal}) => <button type="button" data-target='#filterModal' className="btn btn-info" onClick={toggleModal}><span className='glyphicon glyphicon-filter'></span>Show filters</button>
        }
        header='Fiters'
        fId='filterModal'
        content={({ toggleModal }) => {
            const onSubmit = () => {
                toggleModal()
            }
            return (
                <form onSubmit={onSubmit}>
                    <div id="filters">
                        <GenderFilter />
                        <OriginFilter />
                        <SpeciesFilter />
                    </div>
                </form>
            )
        }}
    />
)
export default Filters;