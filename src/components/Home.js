import React from 'react';
import { baseUrl } from '../shared/baseUrl';

function Splash() {
    return (
        <div className="splash">
            <h1>Splash</h1>
        </div>
    );
}

function Welcome() {
    return (
        <div className="featured">
            <h1>Welcome</h1>
        </div>
    );
}

function Sections() {
    return (
        <div className="sections">
            <h2>SECTIONS</h2>
        </div>
    );
}

function Featured() {
    return (
        <div className="featured">
            <h3>Featured</h3>
        </div>
    );
}

function Home(props) {
    return (
        <div>
            <Splash />
            <Welcome />
            <Sections />
            <Featured />
        </div>
    );
}

export default Home;