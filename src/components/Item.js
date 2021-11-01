import React, { Component, useState } from 'react';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './Loading';
import { BsFillPlusCircleFill, BsFillDashCircleFill } from 'react-icons/bs';
import { Control, Form, Errors } from 'react-redux-form';

function Item(props) {

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
        <div className="container item">
            <div className="row">
                <div className="col-12">
                    <h1>{props.mainItem.name}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 item-image">
                    <img src={baseUrl + props.mainItem.image} />
                </div>
                <div className="col-12 col-md-6">
                    <p>{props.mainItem.summary}</p>
                    <p>$ {props.mainItem.price.toFixed(2)}</p>
                    <BsFillDashCircleFill />
                    <input type="text" />
                    <BsFillPlusCircleFill />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p>{props.mainItem.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Item;