import React from 'react';
// import encrpt from './images/encrpt.gif'
import react from './images/react.png'
// import type from './images/type.gif'
// import fontawsome from './images/fa.png'
import js from './images/js.jpg'
import jsps from './images/js-ps.png'
import './Blog.css'
const Blog = () => {
    return (
        <div className="blog">

{/*********************************************************First Blog Card Start ************************************************/}
        <div class="container blogBody container-color">
            <h2 class="headline">My Blog On Medium</h2>
            <br/>
        <div class="card-deck">
{/*********First Card Start***********/}
            <div class="card" style={{width: "18rem"}}>
                <img src={js} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Let's Start a Journey With JavaScript.</h5>
                    <p class="card-text">A simple overview about JavaScript.  Some basic concepts about JavaScript and others. </p>
                    <a href="https://sakibfset13.medium.com/lets-start-a-journey-with-javascript-ca4485adf2e3" class="btn btn-primary" target="_blank" rel="noreferrer">Read Full Article</a>
                </div>
            </div>
            
{/*********First Card End***********/}

{/*********Second Card Start***********/}
        <div class="card" style={{width: "18rem"}}>
                <img src={react} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Start With React</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://sakibfset13.medium.com/hello-react-59b4dd2d46ff" class="btn btn-primary" target="_blank" rel="noreferrer">Read Full Article</a>
                </div>
            </div>
{/*********Second Card End***********/}

{/*********Third Card Start***********/}
            <div class="card" style={{width: "18rem"}}>
                <img src={jsps} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Simple Problem: Solution with JavaScript</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://sakibfset13.medium.com/simple-problem-solution-with-javascript-de78478b54c9" class="btn btn-primary" target="_blank" rel="noreferrer">Read Full Article</a>
                </div>
            </div>
{/*********Third Card End***********/}
            </div>
        
{/*********************************************************First Blog Card End ***************************************************/}

            <br/>
{/*******************************************************Second Blog Card Start *************************************************/}
        <div class="card-deck">
{/*********First Card Start***********/}
            {/* <div class="card" style={{width: "18rem"}}>
                <img src={type} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">React-typical</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://medium.com/@sakibfset13" class="btn btn-primary" target="_blank" rel="noreferrer">Read Full Article</a>
                </div>
            </div> */}
{/*********First Card End***********/}

{/*********Second Card Start***********/}
            {/* <div class="card" style={{width: "18rem"}}>
                <img src={encrpt} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">use-dencrypt-effect</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://medium.com/@sakibfset13" class="btn btn-primary" target="_blank" rel="noreferrer">Read Full Article</a>
                </div>
            </div> */}
{/*********Second Card End***********/}

{/*********Third Card Start***********/}
            {/* <div class="card" style={{width: "18rem"}}>
                <img src={fontawsome} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Using Fontawsome in React</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://medium.com/@sakibfset13" class="btn btn-primary" target="_blank" rel="noreferrer">Read Full Article</a>
                </div>
            </div> */}
{/*********Third Card End***********/}
            </div>
{/*******************************************************Second Blog Card Start *************************************************/}
         </div>
        </div>
    );
};

export default Blog;