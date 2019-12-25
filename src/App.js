import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './app.scss';

import Loader from './components/loader';

//containers 
const DefaultLayout = React.lazy(() => import('./containers/defaultLayout'));
const Page404 = React.lazy(()=> import('./views/pages/page404'));
const Page500 = React.lazy(()=> import('./views/pages/page500'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
            <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
