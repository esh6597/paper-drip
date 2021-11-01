import React, { Component, useState } from 'react';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './Loading';
import { BsFillPlusCircleFill, BsFillDashCircleFill,
    BsFillHandThumbsUpFill, BsFillHandThumbsDownFill } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';

function Item(props) {

    const itemLoader = () => {
        if (props.items.isLoading) {
            return (
                <Loading />
            );
        }
        if (props.items.errMess) {
            return (
            <div className="col">
                <p>{props.items.errMess}</p>
            </div>
            );
        }
        return(
            <React.Fragment>
                <div className="col-12">
                    <h1>{props.mainItem.name}</h1>
                </div>
                <div className="col-12 col-md-6 item-image">
                    <img src={baseUrl + props.mainItem.image} />
                </div>
                <div className="col-12 col-md-6">
                    <p>{props.mainItem.summary}</p>
                    <p>$ {props.mainItem.price.toFixed(2)}</p>
                    <BsFillDashCircleFill />
                    <input type="text" />
                    <BsFillPlusCircleFill />
                    <Button
                        variant="primary"
                    >
                        Add to Cart
                    </Button>
                </div>
                <div className="col-12 col-md-6">
                    <p>{props.mainItem.description}</p>
                </div>
            </React.Fragment>
        );
    }

    const reviewLoader = () => {
        if (props.reviews.isLoading) {
            return (
                <Loading />
            );
        }
        if (props.reviews.errMess) {
            return (
            <div className="col">
                <p>{props.reviews.errMess}</p>
            </div>
            );
        }

        const parseDate = (dateString) => {
            const dateObject = new Date(dateString);
            const options = { month: 'long' };

            return (
                <React.Fragment>
                    {new Intl.DateTimeFormat('en-US', options).format(dateObject)}
                    {' '}{dateObject.getDate()}
                    {', '}{dateObject.getFullYear()}
                </React.Fragment>
            );
        };

        return(
            <React.Fragment>
                {props.mainReviews.map(review => {
                    return(
                        <div>
                            <h4>{review.name}</h4>
                            <p>
                                {review.rating}
                                {review.rating > 1 ? ' Stars' : ' Star'}
                            </p>
                            <p>
                                {review.summary}
                            </p>
                            <p>
                                by {review.author}{' '}{parseDate(review.date)}
                            </p>
                            <p>
                                {review.likes}{' '}<BsFillHandThumbsUpFill />{' '}
                                {review.dislikes}{' '}<BsFillHandThumbsDownFill />
                            </p>
                        </div>
                    );
                })}
            </React.Fragment>
        );
    }

    return(
        <div className="container item">
            <div className="row">
                {itemLoader()}
                <div className="col-12 col-md-6">
                    <h3>Reviews</h3>
                    {reviewLoader()}
                </div>
            </div>
        </div>
    );
}

export default Item;