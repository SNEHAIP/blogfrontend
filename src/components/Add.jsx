import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const Add = () => {
    const [input,setInput] = useState(
        {
            "Message":"","userId":sessionStorage.getItem("userId")}
    )
    const inputhandler = (event) => {
        setInput({...input,[event.target.name]:event.target.value })
    }
   
    const readValue=()=>{
        console.log(input)
        axios.post("http://localhost:8080/add",input,{
            headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}
        }).then(
                (response)=>{
                    console.log(input)
                    if (response.data.status=="success") {
                        alert("posted successfully")
                        
                    } else {
                        alert("something went wrong")
                    }

                }).catch(
                    (error)=>{
                        console.log(error)
                    }
                )
    }
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">POST A MESSAGE</label>
                                <textarea name="Message" id="" className="form-control" value={input.Message} onChange={inputhandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValue} className="btn btn-success">POST</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add