import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const Items = props => {
    const { character } = props;
    return (
        <React.Fragment>
            <div className="col-xs-12 col-lg-3 col-sm-4 mt-3">
                <div className="card">
                    <div className="card_header">
                        <img src={character.image} className="card-img-top" alt={character.name} />
                        <div className="card_Title">
                            <h2 className="character_Name">{character.name}</h2>
                            <p className="character_Description">id: {character.id} - <Moment fromNow>{character.created}</Moment></p>
                        </div>
                    </div>
                    <div className="card-body">
                        <ul className="card-info">
                            <li><span>STATUS</span><p>{character.status}</p></li>
                            <li><span>SPECIES</span><p>{character.species}</p></li>
                            <li><span>GENDER</span><p>{character.gender}</p></li>
                            <li><span>ORIGIN</span><p>{character.origin.name}</p></li>
                            <li><span>LAST LOCATION</span><p>{character.location.name}</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

Items.prototype = {
    character: PropTypes.object.isRequired
}

export default Items;
