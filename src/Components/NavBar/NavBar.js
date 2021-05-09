import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';
import resume from '../resume.pdf';
const NavBar = () => {
     
    return (
        <div class="navigation">
            <nav class="navbar navbar-expand-lg navbar-light">
            <div class="collapse navbar-collapse navbarCustom" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto">
                    <li class="nav-item">
                        <Link className="nav-link text-dark" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-dark" to="/projects">Projects</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-dark" to="/blog">Blog</Link>
                    </li>
                    {/* <li class="nav-item">
                        <Link className="nav-link text-dark" to="/myself">Myself</Link>
                    </li> */}
                    {/* <li class="nav-item">
                        <Link className="nav-link text-dark" to="/contact">Contact</Link>
                    </li> */}
                    <li className="nav-item">
                        <a href={resume} download="sadman_sakib"><button class="btn btn-info" >My Resume</button></a>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    );
};

export default NavBar;

