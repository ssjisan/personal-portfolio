import React from 'react';
import {Link} from "react-router-dom";
import "./Project.css"
import ca from '../../Projects/image/carousel/ca.jpg';
import va from '../../Projects/image/carousel/vn.jpg';
import wf from '../../Projects/image/carousel/wf.jpg';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
  
const Project = () => {

    return (
        <div>
            <div class="container blogBody">
                <h2>Projects</h2>

            <div className="row card-deck">
                <CardDeck className="d-flex justify-content-around">
                    <Card className="col-6 col-md-4" style={{width: "18rem"}}>
                        <Card.Img variant="top" src={ca} />
                        <Card.Body>
                        <Card.Title>Creative Agency</Card.Title>
                        <Card.Text>
                        I developed this test app for a Developer firm. They are working with creating a website, mobile app, graphics design related staffs like posters, visiting card, flyers.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-around">
                        <button type="button" class="btn btn-info">Live</button>
                        <button type="button" class="btn btn-dark">Github</button>
                        </Card.Footer>
                    </Card>
                    <Card className="col-6 col-md-4" style={{width: "18rem"}}>
                        <Card.Img variant="top" src={va} />
                        <Card.Body>
                        <Card.Title>Volunteer Network</Card.Title>
                        <Card.Text>
                        This full-stack site is developed for an organization that wants to do this volunteer works. A user can participate in any Voluntarily event. 
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-around">
                        <button type="button" class="btn btn-info">Live</button>
                        <button type="button" class="btn btn-dark">Github</button>
                        </Card.Footer>
                    </Card>
                    <Card className="col-6 col-md-4" style={{width: "18rem"}}>
                        <Card.Img variant="top" src={wf} />
                        <Card.Body>
                        <Card.Title>Weather forecast</Card.Title>
                        <Card.Text>
                        A simple weather forecast website for searching weather updates based on city name.Showing results with temperature and weather status.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-around">
                        <button type="button" class="btn btn-info">Live</button>
                        <button type="button" class="btn btn-dark">github</button>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                </div>
                    <br/>
                <div>
                    <button type="button" class="btn btn-warning">Find More Projects</button>
                </div>
            </div>
        </div>
    );
};

export default Project;