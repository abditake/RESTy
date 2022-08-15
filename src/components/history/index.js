import { useState } from 'react'


const History = (props) => {
  console.log('props',props);
  const [state, setState] = useState(false);
  
  const handleClick = () => {
    if(state === false){
      setState(true)
    }else{
      setState(false);
    }
  }

  console.log('props',state);
  return (
    <>
    <h1>History</h1>
    {props.history.map((call,idx) => (
    <div key={idx}>
      <p onClick={handleClick}>call: {call.url}</p>
      <p>method: {call.method}</p>
      <div>
        {/* {state ? 
        <>
        {call.data.results.map((key,idx)=> (

          <div key={idx}>
            {key.name}
          </div>
        ))}
        </>
        : null} */}
      </div>
    </div>
  ))}
    </>
  )
}

export default History;