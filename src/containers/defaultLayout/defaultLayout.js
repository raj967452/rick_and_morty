import React, { Component, Suspense } from 'react';
import Loader from '../../components/loader';

const DefaultFooter = React.lazy(() => import('./defaultFooter'));
const DefaultHeader = React.lazy(() => import('./defaultHeader'));
const DefaultBody = React.lazy(() => import('./defaultBody'));


class DefaultLayout extends Component {
    render() {
        return (
            <div className="app">
                <DefaultHeader />
                <Suspense fallback={<Loader />}>
                    <div className="container" style={{ paddingTop: '6rem' }} >
                        <DefaultBody />
                    </div>
                </Suspense>
                <DefaultFooter />
            </div>
        )
    }
}

export default DefaultLayout;