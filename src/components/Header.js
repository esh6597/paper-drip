import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

import { BsSearch, BsPersonFill, BsCartFill } from "react-icons/bs";
import variables from '../variables.module.scss';

class Header extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isCartOpen: false,
            isSearchOpen: false,
            isModalOpen: false,
            isLoggedIn: false,
            cart: []
        };
    }

    render() {
        return (
            <div className='toolbar'>
                <BsSearch />
                <BsPersonFill />
                <BsCartFill />
            </div>
        );
    }
}

export default Header;