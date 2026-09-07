import React, { useState } from 'react'
import "./login.module.css"

const Login = () => {
    const [submit, setSubmit] = useState(0)





  return (

    <div>
    <div>
      <h1>Login : {submit}</h1>
     <input type="text" placeholder='Enter Username'/>
     <br/>
     <br/>
     <input type="text" placeholder='Password'/>
     <br/>
     <br/>
     <button onClick={()=>{setSubmit(1)}}>Submit</button>
    </div>
    </div>
  )
}

export default Login
