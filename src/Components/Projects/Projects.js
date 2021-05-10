import React from 'react';
import './Projects.css'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import creative from './image/ca.jpg';
import volunteer from './image/vn.jpg';
import weather from './image/wf.jpg';
import guess from './image/guess.PNG';
import athena from './image/athena.PNG';
import panda from './image/panda.PNG'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
    return (
        <div className="project-background ">
            <div class="container blogBody">
                <h2>Recent Projects</h2>

            <div className="row card-deck">
            {/* First Column Start*/}
            <CardDeck className="row justify-content-around">
                    <Card className="col-6 col-md-4 mb-2" style={{width: "18rem"}}data-aos="flip-left">
                        <Card.Img variant="top" src={creative} />
                        <Card.Body>
                        <Card.Title>Creative Agency</Card.Title>
                        <Card.Text>
                        I developed this test app for a Developer firm. They are working with creating a website, mobile app, graphics design related staffs like posters, visiting card, flyers.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-around">
                        <a href="https://creative-agency-client-site.web.app/" target="_blank" rel="noreferrer"><button type="button" class="btn btn-info">Live</button></a>
                        <a href="https://github.com/ssjisan/creative-agency" target="_blank" rel="noreferrer"><button type="button" class="btn btn-dark">Github</button></a>
                        </Card.Footer>
                    </Card>
                    <Card className="col-6 col-md-4 mb-2" style={{width: "18rem"}} data-aos="flip-down">
                        <Card.Img variant="top" src={volunteer} />
                        <Card.Body>
                        <Card.Title>Volunteer Network</Card.Title>
                        <Card.Text>
                        This full-stack site is developed for an organization that wants to do this volunteer works. A user can participate in any Voluntarily event. 
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-around">
                        <a href="https://volunteer-network-site-6aa3d.web.app/" target="_blank" rel="noreferrer"><button type="button" class="btn btn-info">Live</button></a>
                        <a href="https://github.com/ssjisan/volunteer-netwrok-site" target="_blank" rel="noreferrer"><button type="button" class="btn btn-dark">Github</button></a>
                        </Card.Footer>
                    </Card>
                    <Card className="col-6 col-md-4 mb-2" style={{width: "18rem"}} data-aos="flip-right">
                        <Card.Img variant="top" src={weather} />
                        <Card.Body>
                        <Card.Title>Weather forecast</Card.Title>
                        <Card.Text>
                        A simple weather forecast website for searching weather updates based on city name.Showing results with temperature and weather status.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-around">
                        <a href="https://ssjisan.github.io/weather-app/" target="_blank" rel="noreferrer"><button type="button" class="btn btn-info">Live</button></a>
                        <a href="https://github.com/ssjisan/weather-app" target="_blank" rel="noreferrer"><button type="button" class="btn btn-dark">github</button></a>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            {/* First Column End */}
            
            {/* Second Column Start*/}
            <CardDeck className="row justify-content-around">
                    <Card className="col-6 col-md-4 mb-2" style={{width: "18rem"}}data-aos="flip-left">
                        <Card.Img variant="top" src={guess} />
                        <Card.Body>
                        <Card.Title>Guess-The-Number</Card.Title>
                        <Card.Text>
                        I developed this test app for a Developer firm. They are working with creating a website, mobile app, graphics design related staffs like posters, visiting card, flyers.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-around">
                        <a href="https://ssjisan.github.io/Guess-The-Number/" target="_blank" rel="noreferrer"><button type="button" class="btn btn-info">Live</button></a>
                        <a href="https://github.com/ssjisan/Guess-The-Number" target="_blank" rel="noreferrer"><button type="button" class="btn btn-dark">Github</button></a>
                        </Card.Footer>
                    </Card>
                    <Card className="col-6 col-md-4 mb-2" style={{width: "18rem"}} data-aos="flip-down">
                        <Card.Img variant="top" src={panda} />
                        <Card.Body>
                        <Card.Title>Panda Commerce</Card.Title>
                            <Card.Text>
                                Single page E commerce with HTML5, CSS3, Bootstrap 
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-around">
                        <a href="https://ssjisan.github.io/panda-commerce/" target="_blank" rel="noreferrer"><button type="button" class="btn btn-info">Live</button></a>
                        <a href="https://github.com/ssjisan/panda-commerce" target="_blank" rel="noreferrer"><button type="button" class="btn btn-dark">Github</button></a>
                        </Card.Footer>
                    </Card>
                    <Card className="col-6 col-md-4 mb-2" style={{width: "18rem"}} data-aos="flip-right">
                        <Card.Img variant="top" src={athena} />
                        <Card.Body>
                        <Card.Title>Florence agency</Card.Title>
                            <Card.Text>
                                A practice project. Simple responsive site with ReactJS.  
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-around">
                        <a href="https://angry-poincare-5dea45.netlify.app/" target="_blank" rel="noreferrer"><button type="button" class="btn btn-info">Live</button></a>
                        <a href="https://github.com/shabnam-priyanka/project-athena" target="_blank" rel="noreferrer"><button type="button" class="btn btn-dark">github</button></a>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            {/* Second Column End */}
                </div>
            </div>                 
            <Link className="nav-link" to="/"> <button type="button" class="btn btn-primary"><FontAwesomeIcon icon={faHome}/> Back To Home </button> </Link>
        </div>
    );
};

export default Projects;