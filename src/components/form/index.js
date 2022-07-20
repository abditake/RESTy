import React from 'react';
import { useState } from "react";
import './form.scss';

const Form = (props) => {
  
  const { handleApiCall } = props;
  const [method, setMethod,] = useState();
  

  let handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method,
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    handleApiCall(formData);
  }

 let handleMethod = e => {
    setMethod(e.target.id)
 }
  console.log(handleApiCall);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="GET" onClick={handleMethod}>GET</span>
          <span id="POST"onClick={handleMethod}>POST</span>
          <span id="PUT"onClick={handleMethod}>PUT</span>
          <span id="DELETE"onClick={handleMethod}>DELETE</span>
        </label>
      </form>
    </>
  );

}



export default Form;
