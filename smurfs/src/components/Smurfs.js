import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import {useEffect} from 'react';
const DogPhoto = ({ getSmurfs, smurfs, isFetching, error }) => {
  useEffect(() => {
    // run action creator when the component mounts
    getSmurfs();

  }, [getSmurfs]);

  if (isFetching) {
    return <h3>Fetching your smurfs</h3>;
  }
 
  return (
    <div className="smurf-container">
        <h1>Smurf Village</h1>
      <div className="smurf">
     {smurfs.map(smurf)}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    photo: state.photo,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getPhoto }
)(DogPhoto);