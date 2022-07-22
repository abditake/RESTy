import React from 'react';
import { useState } from "react";
import './form.scss';

const Form = (props) => {
  
  const { handleApiCall } = props;
  const [data, setData] = useState("");
  const [method, setMethod,] = useState();
  const [url, setUrl,] = useState("");
  
  let handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method,
      url,
      data: data,
    };
    handleApiCall(formData);
  }

 let handleMethod = e => {
    setMethod(e.target.id)
 }

 const handleChange = (e) => {
  let { name, value } = e.target;
  if (name === "url") setUrl(value);
  if (name === "body") setData(value);
};
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={handleChange} />
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
