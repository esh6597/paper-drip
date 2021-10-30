import React from 'react';
import Card from 'react-bootstrap/Card';
import { baseUrl } from '../shared/baseUrl';
import { Link } from 'react-router-dom';

function About(props) {
    return (
        <div>
            <div className="header about">
                <h2>About</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5">

                    </div>
                    <div className="col-12 col-md-7">
                        <h3>What the Heck is Paper Drip?</h3>
                        <p>
                            Paper Drip was originally created to practice and eventually showcase my web development 
                            capabilities. I wanted to make a website about origami because this hobby has affected 
                            nearly all aspects of my life in the way I approach problems and learn.
                        </p>
                        <p>
                            Origami has an extremely rich culture rooted Japanese history. The intricacy and care that 
                            are required for more advanced origami has kept the art not only relevant, but also crucial 
                            in our global environment. Today we use models derived from origami to design medical 
                            equipment, satellites, and drones.
                        </p>
                        <p>
                            This project was created through Node.js and React. It is publicly available through this 
                            <a href="https://github.com/esh6597/paperdrip"> Github link.</a>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3>Site Features</h3>
                        <p>Collapsed list about the sections coming soon.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-7">
                        <h3>About Me</h3>
                        <p style={{fontStyle: 'italic'}}>
                            "A jack of all trades is a master of none, but oftentimes better than a master of one."<br />
                            --Someone, probably
                        </p>
                        <p>
                            I'm an eclectic clown from Rockville, MD currently living in Tucson, AZ. I love learning but also often 
                            enjoy its pitfalls--if I'm not coding you can definitely catch me sinking hundreds of hours into drawing, 
                            gaming, paper crafts, useless science documentaries, and Wikipedia.
                        </p>
                        <p>
                            Ex-artist, ex-athlete, ex-competitive gamer, ex-store owner, ex-girl: all of my wildly different skills combine to make an absolute 
                            mess of a person. Portfolio links coming soon.
                        </p>                  
                    </div>
                    <div className="col-12 col-md-5">

                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3>Like what you see? Check out these sister websites!</h3>
                        <p>Links are currently in progress; expect some jankiness.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card>
                            <Card.Img variant="top" src={baseUrl + 'media/images/about.png'} />
                            <Card.Title>About</Card.Title>
                            <Card.Body>
                                <Card.Text>Learn about the site and its author, see some other things I've done, or contact me.</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;