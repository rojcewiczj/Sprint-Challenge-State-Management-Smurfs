import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";


const OnboardForm = ({errors, touched, values, status}) => {
   const [smurfs, setSmurfs] = useState([]);
   console.log('this is touched', touched);
   useEffect(() => {
       if (status) {
           setSmurfs([...smurfs, status]);
       }
   }, [status]);


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
              {touched.password && errors.password && <p className="error">{errors.password}</p>}

             
              <label className="checkbox-container">
                  Terms of Service
                    
                  <Field 
                    type="checkbox"
                    name="termsOfService"
                    checked={values.termsOfService}
                    /> 
                  
                    <span className="checkmark" />
                    
              </label>
             
              <button type= "submit"> Submit </button>
            

            </Form>  
           
            {users.map(user => (
                 <Card >
               <ul key={user.id}>
                <li>Name: {user.name}</li>
                   <li>Email: {user.email}</li>
                   <li>Password:{user.password}</li>
                   <li>Role: {user.role}</li>
                   </ul>
                 </Card>
            ))}
        </div>
       
    )
}

const FormikOnboardForm = withFormik ({
    mapPropsToValues ({ name, email, password, role, termsOfService}) {
        return {
            termsOfService: termsOfService || false,
            name: name ||"",
            email: email || "",
            password: password || "",
            role: role || "",
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required(<p>for real?</p>).min(3).max(50),
        email: Yup.string().required(<p>you sure?</p>).min(3).max(25).email(),
        password: Yup.string().required(<p>hows bout you try again...</p>).min(6).max(15)
        

    }),
    
    handleSubmit (values, { setStatus } ) {
        axios
          .post("https://reqres.in/api/users", values)
          .then(res => {
              setStatus(res.data);
          })
          .catch(err => console.log(err.response));
        

    }

})(OnboardForm);

export default FormikOnboardForm;