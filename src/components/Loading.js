import React from 'react';
import FadingBalls from 'react-cssfx-loading/lib/FadingBalls';
import variables from '../variables.module.scss';

export const Loading = () => {
    return (
        <div className="col">
            <FadingBalls />
            <p>Loading...</p>
        </div>
    );
}