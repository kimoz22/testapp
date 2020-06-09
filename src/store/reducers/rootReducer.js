import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'
import { firebaseReducer } from 'react-redux-firebase'



const rootReducer = combineReducers({  // Object Properties
    auth: authReducer,
    project: projectReducer

 
 
});

export default rootReducer
