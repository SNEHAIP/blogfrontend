import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const [input, setInput] = useState(
        {
            "email": "",
            "password": ""

        }
    )
    const inputhandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })

    }
    const readValue = () => {
        console.log(input)

        axios.post("http://localhost:8080/login", input).then(
            (response) => {
                console.log(input)
                if (response.data.status == "success") {
                   
                   sessionStorage.setItem("userId",response.data.userId)
                   sessionStorage.setItem("token",response.data.token)
                   navigate("/add")
                }
                else{
                    alert(response.data.status)
                }

            }


        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" name='email' id="" className="form-control" value={input.email} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name='password' id="" className="form-control" value={input.password} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValue} className="btn btn-success">LOGIN</button >
                            </div>
                            <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            < p>New User <Link to = "/signup">CLICK HERE</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login