import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [ input,setInput]=new useState(
        {
            "name":"",
            "dob":"",
            "email":"",
            "gender":"",
            "password":"",
            "confirmpassword":""
        }
    )
    const inputhandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
if(input.password==input.confirmpassword){ 
  axios.post("http://localhost:8080/signup",input).then(
    (response)=>{
        console.log(response.data)
        if (response.data.status=="success") {
            alert("registered successfully")

            
        } else {
            alert("emailid already exist")
            
        }
    }
  ).catch(
    (error)=>{
        console.log(error)
    }
  )
}
else{
    alert("password and confirm password doesnot match")
}

      
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name'value={input.name} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">DOB</label>
                        <input type="date" id="" className="form-control" name='dob' value={input.dob} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="email" id="" className="form-control" name='email' value={input.email} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Gender</label>
                        <input type="text" className="form-control"name='gender' value={input.gender} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" id="" className="form-control" name='password' value={input.password} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">ConfirmPassword</label>
                        <input type="password" id="" className="form-control"name='confirmpassword'value={input.confirmpassword}onChange={inputhandler} />
                        </div>
                        
                    </div>
                    <br></br>
                    <button onClick={readValue} className="btn btn-success">Signup</button>
                </div>
              
                <div>
                <br></br>
            < p>New User <Link to = "/">CLICK HERE</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup