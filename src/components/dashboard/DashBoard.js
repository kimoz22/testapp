import React, { Component } from "react"
import Notification from './Notification';
import ProjectList from '../Project/ProjectList'
import {connect} from 'react-redux' //connect together  step 1

class Dashboard extends Component {
    render() {
     //   console.log(this.props); // step 6
       const {projects} = this.props;  // step 7
       

        return (
            <div className="dashboard container">
                <div className="row">                
                    <div className="col s12 m6">                        
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification />
                    </div>
                </div>
            </div>
        )
    }
}
// Step 3 this acction is takes the state of our store to access on that
const mapStateToProps = (state) => {
    // return the object which props of the components 
    return {
         projects: state.project.projects // to access of the project object step 4
    }

}

//Step 2 connect 
export default connect(mapStateToProps)(Dashboard) // step 5 pass the parameter mapStetToProps get data in the store
