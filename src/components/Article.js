import React, { Component, useState } from 'react';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './Loading';
import { BsFillPlusCircleFill, BsFillDashCircleFill,
    BsFillHandThumbsUpFill, BsFillHandThumbsDownFill } from 'react-icons/bs';

function Article(props) {

    const articleLoader = () => {
        if (props.articles.isLoading) {
            return (
                <Loading />
            );
        }
        if (props.articles.errMess) {
            return (
            <div className="col">
                <p>{props.articles.errMess}</p>
            </div>
            );
        }
        return(
            <React.Fragment>
                <div className="col-12">
                    <img src={baseUrl + props.mainArticle.image} />
                </div>
                <div className="col-12 col-sm-5 col-md-3">
                    <p>Written by Erin H</p>
                    <p>{parseDate(props.mainArticle.date)}</p>
                </div>
                <div className="col-12 col-sm-7 col-md-9">
                    <h1>{props.mainArticle.name}</h1>
                    <p>{props.mainArticle.summary}</p>
                </div>
                <div className="col-12">
                    <p>{props.mainArticle.text}</p>
                </div>
            </React.Fragment>
        );
    }

    const commentLoader = () => {
        if (props.comments.isLoading) {
            return (
                <Loading />
            );
        }
        if (props.comments.errMess) {
            return (
            <div className="col">
                <p>{props.comments.errMess}</p>
            </div>
            );
        }

        return(
            <React.Fragment>
                {props.mainComments.map(comment => {
                    return(
                        <div>
                            <p>"{comment.text}"</p>
                            <p>-- {comment.author}, {parseDate(comment.date)}</p>
                            <p>
                                {comment.likes}{' '}<BsFillHandThumbsUpFill />{' '}
                                {comment.dislikes}{' '}<BsFillHandThumbsDownFill />
                            </p>
                        </div>
                    );
                })}
            </React.Fragment>
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
        <div className="container article">
            <div className="row">
                {articleLoader()}
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <h3>Comments</h3>
                    {commentLoader()}
                </div>
                <div className="col-12 col-md-6">
                    <p>Sorry, you can't add comments yet!</p>
                </div>
            </div>
        </div>
    );
}

export default Article;