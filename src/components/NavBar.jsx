import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
    const logout=()=>{
        sessionStorage.clear()
        navigate("/")

    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" href="#">BLOG</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/add">Add Post</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/viewall">ViewAll</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/viewmypost">View My Post</Link>
                                
                            </li>
                           <li class = "nav-link" >
                            <button className="btn btn-success" onClick={logout}>LOGOUT</button>
                           </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar