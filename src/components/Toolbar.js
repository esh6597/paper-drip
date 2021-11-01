import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { connect } from 'react-redux';

import { BsSearch, BsPersonFill, BsCartFill } from "react-icons/bs";
import variables from '../variables.module.scss';
import Collapse from 'react-bootstrap/Collapse';

class Toolbar extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isCartOpen: false,
            isModalOpen: false
        };

        this.toggleCart = this.toggleCart.bind(this);
    }

    toggleCart() {
        this.setState({isCartOpen: !this.state.isCartOpen});
    }

    render() {
        const cartDisplay = this.props.cart.cart.map(cartItem => {
            const referencedItem = this.props.items.find(reference => reference.id === cartItem.id)
            return (
                <div className="col-12" key={referencedItem.id}>
                    {referencedItem.name}{' | '}Quantity:{' '}{cartItem.quantity}
                </div>
            );
        });


        return (
            <div className='toolbar'>
                <div></div>
                <div>
                    <BsCartFill 
                        onClick={this.toggleCart}
                    />
                    <Collapse in={this.state.isCartOpen}>
                        <div class="cart-body">
                            {cartDisplay}
                        </div>
                    </Collapse>
                </div>
            </div>
        );
    }
}

export default Toolbar;