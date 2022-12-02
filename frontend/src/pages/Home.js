import React from "react";
import "./Home.css";
import axios from "axios";
import {useEffect, useState} from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Home() {
  const [listOfWastes, setListOfWastes] = useState([]);
  const initialValues = {
    w: "",
    g: "",
    p: "",
  };
  const Mtruck = [];
  const Gtruck = [];
  const Ptruck = [];

  // useEffect(() => {
  //   axios.get("http://localhost:3001/wastes").then( (response) => {
  //     setListOfWastes(response.data);
  //   });
  // }, []);

  const validationSchema = Yup.object().shape({});

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/wastes").then((response) => {

    });
  };
  return (
    <div className="homeContainer">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label htmlFor="inputUser">Username: </label>
          <ErrorMessage name="title" component="span" />
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
          <input type="checkbox" id="metal" value="metal" />
          <label htmlFor="metal">Metal</label>
          <br />
          <input type="checkbox" id="glass" value="glass" />
          <label htmlFor="glass">Glass</label>
          <br />
          <input type="checkbox" id="paper" value="paper" />
          <label htmlFor="paper">Paper</label>
          <br></br>
          <button type="submit">Order Truck</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Home;