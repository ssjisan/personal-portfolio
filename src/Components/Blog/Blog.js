import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import react from './images/react.png'
import js from './images/js.jpg'
import jsps from './images/js-ps.png'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import './Blog.css'

const Blog = () => {
    return (
        <div className="blog ">
            <div class="container blogBody">
                <h2>My Blog On Medium</h2>

            <div className="row card-deck">
                <CardDeck className="row justify-content-around">
                    <Card className="col-6 col-md-4 mb-2" style={{width: "18rem"}}>
                        <Card.Img variant="top" src={js} />
                        <Card.Body>
                        <Card.Title>Let's Start a Journey With JavaScript</Card.Title>
                        <Card.Text>
                        A simple overview about JavaScript.  Some basic concepts about JavaScript and others
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="justify-content-around">
                        <button type="button" class="btn btn-secondary">Link</button>
                        </Card.Footer>
                    </Card>
                    <Card className="col-6 col-md-4 mb-2" style={{width: "18rem"}}>
                        <Card.Img variant="top" src={react} />
                        <Card.Body>
                        <Card.Title>Start with React</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="justify-content-around">
                        <button type="button" class="btn btn-secondary">Link</button>
                        </Card.Footer>
                    </Card>
                    <Card className="col-6 col-md-4 mb-2" style={{width: "18rem"}}>
                        <Card.Img variant="top" src={jsps} />
                        <Card.Body>
                        <Card.Title>Simple Problem: Solution with JavaScript</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="justify-content-around">
                        <button type="button" class="btn btn-secondary">Link</button>
                        </Card.Footer>
                    </Card>
                    <Card className="col-6 col-md-4 mb-2" style={{width: "18rem"}}>
                        <Card.Img variant="top" src={react} />
                        <Card.Body>
                        <Card.Title>Start With React</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="justify-content-around">
                        <button type="button" class="btn btn-secondary">Link</button>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                </div>
            </div>
            <Link className="nav-link" to="/"> <button type="button" class="btn btn-primary" style={{textAlign: 'center'}}><FontAwesomeIcon icon={faHome}/> Back To Home </button> </Link>
        </div>
    );
};

export default Blog;