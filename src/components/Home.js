import React from 'react';
import { baseUrl } from '../shared/baseUrl';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Splash() {
    return (
        <div className="splash">
           
        </div>
    );
}

function Welcome() {
    return (
        <div className="welcome col-lg-7 col-12">
            <h1>Welcome</h1>
            <p>Thanks for stopping by! Paper Drip is a personal passion project I started about origami
                to work on my web development skills, but I really hope it motivates you to discover and
                 enjoy this hobby as much as I do.</p>
            <p>Check out the <Link to='/about'>about page</Link> for more information!</p>
        </div>
    );
}

function NewsLetter() {
    return (
        <div className="col-12 col-lg-5 newsletter">
            <div>
                <h3>Latest News</h3>
                <p>Local programmer manages to somehow overcome the odds and complete his portfolio project on time.</p>
                <p>Live feed coming soon; stay tuned!</p>
            </div>
        </div>
    );
}

function Featured() {
    return (
        <div className="row featured">
            <h3>Featured</h3>
            <p style={{textAlign: 'center', marginBottom: 50}}>Sorry, nothing works here yet. Dynamically generated features coming soon!</p>
        </div>
    );
}

function Sections() {
    return (
        <div className="sections">
            <div className="row no-gutter">
                <h3>Sections</h3>
            </div>
            <div className="row">
                <div className="col-12 col-md-4">
                    <Link to="/about">
                        <Card>
                            <Card.Img variant="top" src={baseUrl + 'media/images/about.png'} />
                            <Card.Title>About</Card.Title>
                            <Card.Body>
                                <Card.Text>Learn about the site and its author, see some other things I've done, or contact me.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className="col-12 col-md-4">
                    <Link to="/blog">
                        <Card>
                            <Card.Img variant="top" src={baseUrl + 'media/images/blog.png'} />
                            <Card.Title>Blog</Card.Title>
                            <Card.Body>
                                <Card.Text>Learn about origami's history, future, or even its unconventional applications! 
                                    You can also find all of my tutorials here.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className="col-12 col-md-4">
                    <Link to="/shop">
                        <Card>
                            <Card.Img variant="top" src={baseUrl + 'media/images/shop.png'} />
                            <Card.Title>Shop</Card.Title>
                            <Card.Body>
                                <Card.Text>Want to support me directly? Feel free to browse some of the origami-related 
                                    art I've made! This section barely exists, so don't expect much.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function Home(props) {
    return (
        <div>
            <Splash />
            <div className='container'>
                <div className="row">
                    <Welcome />
                    <NewsLetter />
                </div>
                <Featured />
                <Sections />
            </div>
        </div>
    );
}

export default Home;