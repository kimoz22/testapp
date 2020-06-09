import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import  Navbar   from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/DashBoard"


import Shopregistration from './components/Shopregistration';
import ProjectDetails from './components/Project/ProjectDetails';
import SignedIn from './components/auth/SignedIn';
import SignedUp from './components/auth/SignedUp';
import CreateProject from './components/Project/CreateProject'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
         <Navbar />
         <Switch>
           <Route exact path='/' component={Dashboard}/>     
           <Route path='/project/:id' component={ProjectDetails}/>
           <Route path='/signin' component={SignedIn}/>
           <Route path='/signup' component={SignedUp}/>
           <Route path='/Register' component={Shopregistration}/>
           <Route path='/create' component={CreateProject}/>
         </Switch>
      </div>     
    </BrowserRouter>
  );
}

export default App;
