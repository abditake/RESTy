import React from 'react';
import { useState, useEffect } from "react";

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';

const App = () => {

  const [data ,setData] = useState(null);
  
  // make sure when dealing with the params or api stuff that useState accepts an object it was crashing because i was using it without brackets
  const [requestParams, setRequestParams] = useState({});
  
  let callApi = (requestParams) => {
    setRequestParams(requestParams);
  }

  useEffect(()=>{
    const getData = async () => {
      const response = await axios.get({
        method:requestParams.method,
        url:requestParams.url,
      })
    }
    getData(); 
  },[requestParams]);
 


 console.log(data);
    return (
      <>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} />
        <Footer />
      </>
    );

}

export default App;
