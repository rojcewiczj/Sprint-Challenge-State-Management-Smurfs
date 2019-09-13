import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const DeleteForm = ({smurfs }) => {



}
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