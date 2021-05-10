import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import AOS from 'aos';
import "./Project.css"
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import creative from '../../Projects/image/ca.jpg';
import volunteer from '../../Projects/image/vn.jpg';
import weather from '../../Projects/image/wf.jpg';

 
const Project = () => {
    useEffect(()=>{ 
        AOS.init({duration:2000})
    }, [])
    return (
        <div>
            <div class="container projectBody">
                <h2>Projects</h2>

            <div className="row card-deck">
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
                </div>
                    <br/>
                <div data-aos="zoom-out-up">
                <Link to="/projects"><button type="button" class="btn btn-warning" >Find More Projects</button></Link> 
                </div>
            </div>
        </div>
    );
};

export default Project;