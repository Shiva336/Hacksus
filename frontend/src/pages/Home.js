import React from "react";
import "./Home.css";
import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";

function Home() { 

  let navigate=useNavigate();
  // const [userData, setUserData] = useState("");
  // const [addressData, setAddressData] = useState("");
  // const [distanceData, setDistanceData] = useState("");
  
  // onChange={(e) => setDistanceData(e.target.value)}
  // value={distanceData} 
  //onChange={handleChange}
  const initialValues = {
    address: "",
    username: "",
    distance: 0,
    m: 0,
    g: 0,
    p: 0,
  };

  const onSubmit = (data) => {
    console.log("Data : ");
    console.log(data);
    axios.post("http://localhost:3001/wastes",data).then((response) => {
      console.log(response);
    });
    navigate("/");
  };
  return (
    <div className="homeContainer">
      <div className="headerContainer">
      <div className="headerText">
          Together For A Better World!</div>
     </div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form className="formContainer">
          <label htmlFor="username">Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            id="username"
            name="username"
            placeholder="Username Here"
          />
          <br/>
          <label htmlFor="address">Address:</label>
          <ErrorMessage name="address" component="span" />
          <Field
            autoComplete="off"
            id="address"
            name="address"
            placeholder="Address Here"
          />
          <br/>
          <label htmlFor="distance">Distance:</label>
          <ErrorMessage name="distance" component="span" />
          <Field
            autoComplete="off"
            id="distance"
            name="distance"
            placeholder="Distance Here"
          />
          <br/>

          <p>Enter the quantity of each type of wastes in KGs</p>
          <label htmlFor="m">Metal: </label>
          <ErrorMessage name="m" component="span" />
          <Field
            autoComplete="off"
            id="m"
            name="m"
            placeholder="Metal waste Here"
          />
          <br/>
          <label htmlFor="g">Glass:</label>
          <ErrorMessage name="g" component="span" />
          <Field
            autoComplete="off"
            id="g"
            name="g"
            placeholder="Glass waste Here"
          />
          <br/>
          <label htmlFor="p">Paper:</label>
          <ErrorMessage name="p" component="span" />
          <Field
            autoComplete="off"
            id="p"
            name="p"
            placeholder="Paper waste Here"
          />
          <br/>
        <button type="submit">Order Truck</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Home;
