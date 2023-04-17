import React, { useEffect, useState } from 'react'

function SuccessComponent(){
    useEffect(()=>{
        alert('Success Component Mounted');
        return(()=>{
            alert("Success component unmounted");
        })
    },[])
    return(
        <h1>login Success</h1>
    )
}
function ErrorComponent(){
    useEffect(()=>{
        alert('Error Component Mounted');
        return(()=>{
            alert("Error component unmounted");
        })
    },[])
    return(
        <h2>Invalid Error</h2>
    )
}

export default function FuctionLifecycleComponent() {
 
    const [msg,setMsg] = useState(null);
    function SuccessClick(){
        setMsg(<SuccessComponent/>)
    }
    function ErrorClick(){
        setMsg(<ErrorComponent/>)
    }
    return (
    <div>
      <h2>Main Components</h2>
      <button onClick={SuccessClick}>Success</button>
      <button onClick={ErrorClick}>Invalid</button>

      <hr/>
      {msg}
    </div>
  )
}
