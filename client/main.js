import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

import {Bins} from '../imports/collections/bins';

Meteor.startup(() => {
  // code to run on server at startup
  ReactDOM.render(<App/>, document.querySelector('.render-target'));

});