import React from "react";


const Smurf = (props) => {
    return (
        <div className ="smurf">
            <ul>
                <li>Name: {props.smurf.name}</li>
                <li>Name: {props.smurf.age}</li>
                <li>Name: {props.smurf.height}</li>
            </ul>
        </div>
    )
}
export default Smurf;