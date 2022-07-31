import React from 'react';
import { useState, useEffect, useReducer } from "react";

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';
import axios from 'axios';

export const initialState = {
  data: null,
  requestParams: {},
}

export const restyReducer = (state, action) => {

  switch (action.type) {

    case 'DATA':
      return {
        ...state,
        data: action.payload,
      }

    case 'PARAMS':
      return {
        ...state,
        requestParams: action.payload
      }

    default:
      return state
  }
}


const App = () => {
  const[history, setHistory]= useState([]);
  const [state, dispatch] = useReducer(restyReducer, initialState);
    console.log(history);

  function callApi(requestParams) {
    dispatch({ type: 'PARAMS', payload: requestParams })
    setHistory(...history, requestParams);
  }

  useEffect(() => {
    const getData = async () => {
      if (state.requestParams.url) {
        const response = await axios({
          method: state.requestParams.method,
          url: state.requestParams.url,
        })
        
        dispatch({ type: 'DATA', payload: response.data})
      }
      
    }
    getData();
  }, [state.requestParams]);

  return (
    <>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <div>JSON Body: {state.requestParams.body}</div>
      <Form
        handleApiCall={callApi}
      />
      <Results
        data={state.data}
      />
      {state.data ? <History
      history={history}
      data={state.data}
      requestParams={state.requestParams}
    /> : <h1> Loading...</h1>
    }
      <Footer />
    </>

  );
}

export default App;