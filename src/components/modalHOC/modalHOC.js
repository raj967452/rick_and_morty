import React, { Component, Fragment } from 'react';

class ModalHOC extends Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            open: false
        }
    }
    toggle() {
        this.setState({
            open: !this.state.open
        })
    }
    onEscKeyDown = e => {
        if (e.key !== "Escape") return;
        this.setState({ open: false});
    };
    renderViewComponent(viewComponent, props) {
        return (typeof viewComponent === 'function') ? viewComponent(props) : <div onClick={this.toggle}>{viewComponent}</div>;
    }
    render() {
        const { modalComponent, viewComponent } = this.props;
        const { open } = this.state;
        const modalProps = {
            open,
            toggleModal: this.toggle
        }
        return (
            <Fragment>
                {this.renderViewComponent(viewComponent, modalProps)}
                {modalComponent(modalProps)}
            </Fragment>
        )
    }
}

export default ModalHOC;