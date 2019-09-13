import {
    FETCHING_SMURFS_START,
    FETCHING_SMURFS_SUCCESS,
    REMOVE_SMURF
} from "../actions";

const initialState = {
    
    smurfs: [],
    isFetching: false,
    error: ""
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_SMURFS_START:
          console.log(action)
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case FETCHING_SMURFS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          smurfs: action.payload,
        };
       case REMOVE_SMURF:
           return {
               ...state,
                smurfs: state.smurfs.filter( item =>{
                if (item.id !== action.payload.id) {
                     return item
                }
              })
            
        }
            
           
     
      default:
        return state;
    }
  };
  