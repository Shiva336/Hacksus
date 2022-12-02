import React from "react";
import "./Home.css";
import axios from "axios";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Home() { 
  const initialValues = {
    m: "",
    g: "",
    p: "",
    address: "",
    username: "",
    distance: "",
  };

  const validationSchema = Yup.object().shape({
    
    username: Yup.string().required("You must input a username!"),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/wastes").then((response) => {
      console.log(data);
    });
  };
  const handleChange=(e)=>{
        const value=e.target.value;
        const checked=e.target.checked;
        console.log(value,checked);
  }
  return (
    <div className="homeContainer">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label htmlFor="inputUser">Username: </label>
          <ErrorMessage name="inputUser" component="span" />
          <Field
            autoComplete="off"
            id="inputUser"
            name="username"
            placeholder="Username Here"
          />
          <br/>
          <label htmlFor="inputAddress">Address:</label>
          <ErrorMessage name="inputAddress" component="span" />
          <Field
            autoComplete="off"
            id="inputAddress"
            name="inputAddress"
            placeholder="Address Here"
          />
          <br/>
          <label htmlFor="inputDistance">Distance:</label>
          <ErrorMessage name="inputDistance" component="span" />
          <Field
            autoComplete="off"
            id="inputDistance"
            name="inputDistance"
            placeholder="Distance Here"
          />
          <br/>
          <input type="checkbox" id="metal" value="metal" onChange={handleChange}/>
          <label htmlFor="metal">Metal</label>
          <br />
          <input type="checkbox" id="glass" value="glass" />
          <label htmlFor="glass" onChange={handleChange}>Glass</label>
          <br />
          <input type="checkbox" id="paper" value="paper" />
          <label htmlFor="paper" onChange={handleChange}>Paper</label>
          <br></br>
          <button type="submit">Order Truck</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Home;
