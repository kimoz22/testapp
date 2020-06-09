const   initState = {
 projects:[
     {id:'1',title: 'help me find peach',content:'blahh'}, // list of array step 1
     {id:'2',title: 'help me find this',content:'blur'},
     {id:'3',title: 'help me find that',content:'blahh'},
 ]
}
const projectReducer = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;

    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;

    default:
      return state;
  }

}

export default projectReducer