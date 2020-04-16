import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {DeckProvider} from './DeckContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <DeckProvider>
    <App />
    </DeckProvider>
  </React.StrictMode>,
  document.getElementById('yourCards')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
