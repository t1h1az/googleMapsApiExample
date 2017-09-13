import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

//Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
