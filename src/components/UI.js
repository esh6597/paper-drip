
import React, { Component } from 'react';

import variables from '../variables.module.scss';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from 'react-sidebar';
import { NavLink } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Shop from './Shop';

import { fetchArticles } from '../redux/ActionCreators';

import { BsList } from 'react-icons/bs';

const mapStateToProps = state => {
    return {
        articles: state.articles,
        items: state.items,
        comments: state.comments,
        reviews: state.reviews,
    };
};

const mapDispatchToProps = {
    fetchArticles: () => (fetchArticles())
};

class UI extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sidebarOpen: false
        }

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    componentDidMount() {
        this.props.fetchArticles();
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    toggleSidebar() {
        this.setState({ sidebarOpen: !this.state.sidebarOpen })
    }

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Header />
                <Sidebar
                    sidebar={
                        <div className='sidebar'>
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </div>
                    }
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{
                        sidebar: { 
                            background: variables.colorBackground,
                            padding: 0
                        } 
                    }}
                >
                    <div onClick={() => this.toggleSidebar()} className='sidebarButton'>
                        <BsList style={{fontSize: 32}} />
                    </div>
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/about' render={() => <About />} />
                        <Route exact path='/blog' render={() => <Blog articles={0} />} />
                        <Route exact path='/shop' render={() => <Shop items={0} />} />
                        <Redirect to='/home' />
                    </Switch>
                    <Footer />
                </Sidebar>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UI));