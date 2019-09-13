import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";


const SmurfsForm = ({errors, touched, values, status, smurfs}) => {
   
   console.log('this is touched', touched);
  

    return (
        <div className="smurf-form">
            <h1 className="ui header">Smurf Form</h1>
          
            <Form className="ui action input">
              
              <Field  type="text" name="name" placeholder="Name" />
              {touched.name && errors.name && (
                  <p className="error">{errors.name}</p>
              )}
             
              
              <Field  type="number" name="age" placeholder="age" />
              {touched.age && errors.age && <p className="error">{errors.age}</p>}
            
              <Field type="text" name="height" placeholder="height" />
              {touched.height && errors.height && <p className="error">{errors.height}</p>}

             
              <button type= "submit"> Submit </button>
            

            </Form>  
{/*            
            {smurfs.map(smurf => (
                
               <ul key={smurf.id}>
                <li>Name: {smurf.name}</li>
                   <li>Age: {smurf.age}</li>
                   <li>Height:{smurf.height}</li>
                   </ul>
                 
            ))} */}
        </div>
       
    )
}

const FormikSmurfsForm = withFormik ({
    mapPropsToValues ({ name, age, height}) {
        return {
         
            name: name ||"",
            age: age || "",
            height: height || "",

        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required(<p>for real?</p>).min(3).max(50),
        age: Yup.string().required(<p>you sure?</p>).min(3).max(25),
        height: Yup.string().required(<p>hows bout you try again...</p>).min(2).max(15)
        

    }),
    
    handleSubmit (values, { setStatus } ) {
        axios
          .post("http://localhost:3333/smurfs", values)
          .then(res => {
              setStatus(res.data);
          })
          .catch(err => console.log(err.response));
        

    }

})(SmurfsForm);
const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      isFetching: state.isFetching,
      error: state.error
    };
  };
 
export default connect(
    mapStateToProps,
  
  )(FormikSmurfsForm);