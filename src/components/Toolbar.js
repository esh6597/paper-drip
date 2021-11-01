import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { connect } from 'react-redux';

import { BsSearch, BsPersonFill, BsCartFill } from "react-icons/bs";
import variables from '../variables.module.scss';
import { updateCart, removeCartItem, emptyCart } from '../redux/ActionCreators';

const mapDispatchToProps = {
    updateCart: (itemId, quantity) => (updateCart(itemId, quantity)),
    removeCartItem: (itemId) => (removeCartItem(itemId)),
    emptyCart: () => (emptyCart())
}

class Toolbar extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isCartOpen: false,
            isSearchOpen: false,
            searchQuery: '',
            isModalOpen: false,
            isLoggedIn: false,
            cart: []
        };
    }

    render() {
        return (
            <div className='toolbar'>
                <div></div>
                <div>
                    <BsSearch />
                    <BsPersonFill />
                    <BsCartFill />
                </div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Toolbar);