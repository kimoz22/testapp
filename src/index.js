import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore , applyMiddleware, compose  } from 'redux';  // From Redux 1
import rootReducer from './store/reducers/rootReducer' // call the root reducer 2
import {Provider} from 'react-redux' // bind reduc our react  3
import thunk from 'redux-thunk'
//import { createFirestoreInstance , getFirestore} from 'redux-firestore'
//import { reactReduxFirebase , getFirebase}  from 'react-redux-firebase'

//import { ReactReduxFirebaseProvider , getFirebase } from 'react-redux-firebase'
//import { createFirestoreInstance , getFirestore} from 'redux-firestore'

import {reduxFirestore , getFirestore} from 'redux-firestore'
//import { reactReduxFirebase , getFirebase } from 'react-redux-firebase'

import fbConfig from './config/fbConfig'





const store = createStore(rootReducer,
  compose(
  applyMiddleware(thunk.withExtraArgument(getFirestore)),
  reduxFirestore(fbConfig)
  //reactReduxFirebase(fbConfig)
  ) 
  );



ReactDOM.render(
  // 4 step
  <Provider store={store}> 

           <App />
     

  </Provider>,
  document.getElementById('root'));
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
