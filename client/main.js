import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route , IndexRoute, browserHistory} from 'react-router';

import App from './components/app';

import {Bins} from '../imports/collections/bins';
import BinsMain from './components/bins/bins_main';
import BinsList from './components/bins/bins_list';

const routes=(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={BinsList}/>
            <Route path="bins/:binId" component={BinsMain}/>
        </Route>
    </Router>
);

Meteor.startup(() => {
  // code to run on server at startup
    //            <Route path="bins/:binId" component={BinsMain}/>

    ReactDOM.render(routes, document.querySelector('.render-target'));

});