import React from "react";
import {connect} from 'react-redux';
import {removeSmurfAC} from '../actions';
const Smurf = (props) => { 
    console.log(props.smurf.id)
    const deleteSmurf = smurf => {
        props.removeSmurfAC(smurf)
       
    }
    return (
        <div className ="smurf">
            <ul>
                <li>Name: {props.smurf.name}</li>
                <li>Name: {props.smurf.age}</li>
                <li>Name: {props.smurf.height}</li>
                <button onClick={()=>deleteSmurf(props.smurf)}>Delete</button>
            </ul>
        </div>
    )
}
const mapStateToProps = state => {
    return {
      removeSmurfAC: state.removeSmurfAc
     
      
    
    }
}

export default connect(mapStateToProps, {removeSmurfAC} )(Smurf);
