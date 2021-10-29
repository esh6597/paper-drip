import React from 'react';

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
                            Origami has an extremely rich cultre rooted Japanese history. The intricacy and care that 
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
            </div>
        </div>
    );
}

export default About;