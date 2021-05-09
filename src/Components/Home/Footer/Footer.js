import React from 'react';
import {Link} from "react-router-dom";
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLinkedinIn,faFacebookF,faMediumM,faGithub } from '@fortawesome/free-brands-svg-icons'
import resume from '../../resume.pdf';
const Footer = () => {
    return (
        
        <div class="container-fluid pb-0 mb-0 justify-content-center text-light footer">
     <footer>
         <div class="row my-5 justify-content-center py-5">
             <div class="col-11">
                 <div class="row ">
                     <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                     <h3 class="text-muted mb-md-0 mb-5 bold-text">Sadman Sakib Jisan</h3>

                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 class="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                         <ul class="navbar-nav m-auto">
                    <li class="nav-item">
                        <Link className="nav-link text-light" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-light" to="/projects">Projects</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-light" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <a href={resume} download="sadman_sakib" className="text-light" style={{textDecoration: "none"}}>Download My Resume</a>
                    </li>
                </ul>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                         <p class="mb-1">Banasree, Dhaka</p>
                         
                     </div>
                 </div>
                 <div class="row ">
                     <div class="social col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                         <p class="social text-muted mb-0 pb-0 bold-text"> 
                            <a href="https://www.facebook.com/userjisan/" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faFacebookF} /></a> 
                            <a href="https://medium.com/@sakibfset13" target="_blank"  rel="noreferrer" style={{ marginLeft:20}}><FontAwesomeIcon icon={faMediumM} /></a>
                            <a href="https://www.linkedin.com/in/ssjisan/" target="_blank" rel="noreferrer" style={{ marginLeft:20}}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href="https://github.com/ssjisan" target="_blank" rel="noreferrer" style={{ marginLeft:20}}><FontAwesomeIcon icon={faGithub} /></a>
                        </p><small class="rights">© 2021 Copyright Sadman Sakib Jisan</small>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                         <h6 class="mt-55 mt-2 text-muted bold-text"><b>Sadman Sakib Jisan</b></h6><small> <span><i class="fa fa-envelope" aria-hidden="true"></i></span> ssjisan.dev@gmail.com</small>
                     </div>
                 </div>
             </div>
         </div>
     </footer>
 </div>
    );
};
export default Footer;