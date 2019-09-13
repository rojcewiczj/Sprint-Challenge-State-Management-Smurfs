import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import {useEffect} from 'react';
import Smurf from './Smurf';
const Smurfs = ({ getSmurfs, smurfs, isFetching, error }) => {
  useEffect(() => {
    // run action creator when the component mounts
    getSmurfs();

  }, [getSmurfs]);

  if (isFetching) {
    return <h3>Fetching your smurfs</h3>;
  }
 console.log(smurfs);
 
 

  return (
    <div className="smurf-container">
        <h1>Smurf Village</h1>
      <div className="smurfs">
     {smurfs.map(smurf =>
       <Smurf smurf={smurf}/> )}
      </div>
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
  { getSmurfs }
)(Smurfs);