import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { deleteSmurfs } from '../actions'
import axios from "axios";


const DeleteForm = ({smurfs}) => {
  const [deleteNumber, setDeleteNumber] = useState("");
  useEffect(() => {
    // run action creator when the component mounts
    deleteSmurfs();

  }, [deleteSmurfs]);

  console.log(deleteNumber)
 console.log(smurfs);
  const handleChanges = e => {
    setDeleteNumber(e.target.value);
  };
 
 

  return (
        <div>
          <input
            className="title-input"
            type="text"
            name="deleteNumber"
            value={deleteNumber}
            onChange={handleChanges}
          />
          <button
            onClick={deleteSmurfs(deleteNumber)}
          >
            delete
          </button>
        </div>
    
  );
};
const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
   
  )(DeleteForm);

