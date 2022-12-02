import React from "react";
import "./Home.css";
import axios from "axios";

import {useState} from "react";
import {useNavigate} from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Home() { 

  let navigate=useNavigate();
  const [userData, setUserData] = useState("");
  const [addressData, setAddressData] = useState("");
  const [distanceData, setDistanceData] = useState("");
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
    axios.post("http://localhost:3001/",data).then((response) => {
     navigate("/");
     console.log
    });
  };
  const handleChange=(e)=>{
        const value=e.target.value;
        const checked=e.target.checked;
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
            value={userData} 
             onChange={(e) => setUserData(e.target.value)}
            placeholder="Username Here"
          />
          <br/>
          <label htmlFor="inputAddress">Address:</label>
          <ErrorMessage name="inputAddress" component="span" />
          <Field
            autoComplete="off"
            id="inputAddress"
            name="inputAddress"
            value={addressData} 
             onChange={(e) => setAddressData(e.target.value)}
            placeholder="Address Here"
          />
          <br/>
          <label htmlFor="inputDistance">Distance:</label>
          <ErrorMessage name="inputDistance" component="span" />
          <Field
            autoComplete="off"
            id="inputDistance"
            name="inputDistance"
            value={distanceData} 
             onChange={(e) => setDistanceData(e.target.value)}
            placeholder="Distance Here"
          />
          <br/>
          <input type="checkbox" id="metal" value="metal" onChange={handleChange}/>
          <label htmlFor="metal">Metal</label>
          <br />
          <input type="checkbox" id="glass" onChange={handleChange} value="glass" />
          <label htmlFor="glass" >Glass</label>
          <br />
          <input type="checkbox" id="paper" onChange={handleChange} value="paper" />
          <label htmlFor="paper" >Paper</label>
          <br></br>
          <button type="submit">Order Truck</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Home;