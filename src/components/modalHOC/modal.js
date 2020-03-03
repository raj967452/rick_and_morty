import React, { Fragment } from 'react';

import ModalHOC from './modalHOC';

import './style.scss';

const objectOrFunction = (component, props) => {
    if (typeof component === 'function')
        return component(props);
    return component;
}
export const ModalComponent = props => {
    const { content, header, modalHocProps: { open, toggleModal }, fId } = props;

    return (
        <Fragment>
            <div className={`modal right fade ${ open ? 'show' : 'hide'}`} id={fId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{header}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggleModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {objectOrFunction(content, { toggleModal })}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={toggleModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const DefaultModal = ({ viewComponent, ...rest }) => (
    <ModalHOC
        viewComponent={viewComponent}
        modalComponent={modalHocProps => (<ModalComponent {...rest} modalHocProps={modalHocProps} />)} />
)

export default DefaultModal;