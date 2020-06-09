export const createProject = (project) => {
    return (dispatch,getState,getFirestore) => {
        const firestore = getFirestore();
        
        firestore.collection('projects').add({
            ...project,
            title: 'kimx',
            content: 'torres'                   
        }).then(() =>{
            dispatch({type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err });
        })       
    }
};