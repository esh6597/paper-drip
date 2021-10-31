
import React, { Component } from 'react';

import variables from '../variables.module.scss';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from 'react-sidebar';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Shop from './Shop';

import { fetchArticles, fetchItems } from '../redux/ActionCreators';

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
    fetchArticles: () => (fetchArticles()),
    fetchItems: () => (fetchItems())
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
        this.props.fetchItems();
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
                <Home 
                    articles={this.props.articles}
                    items={this.props.items}
                />
            );
        }

        return (
            <div>
                <Header />
                <Sidebar
                    sidebar={
                        <div className='sidebar'>
                            <Link className="nav-link" to="/home">
                                <p>Home</p>
                            </Link>
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                            <Link className="nav-link" to="/blog">
                                Blog
                            </Link>
                            <Link className="nav-link" to="/shop">
                                Shop
                            </Link>
                        </div>
                    }
                    shadow={false}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{
                        sidebar: { 
                            background: variables.colorWarm,
                            padding: 0,
                            transition: "transform .2s ease-in-out",
                            WebkitTransition: "-webkit-transform .2s ease-in-out"
                        } 
                    }}
                >
                    <div onClick={() => this.toggleSidebar()} className='sidebarButton'>
                        <BsList style={{fontSize: 32}} />
                    </div>
                    <div className='content'>
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/about' render={() => <About />} />
                            <Route exact path='/blog' render={() => <Blog articles={this.props.articles} />} />
                            <Route exact path='/shop' render={() => <Shop items={this.props.items} />} />
                            <Redirect to='/home' />
                        </Switch>
                        <Footer />
                    </div>
                </Sidebar>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UI));