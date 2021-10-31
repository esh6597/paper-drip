import React, { Component, useState } from 'react';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './Loading';
import Card from 'react-bootstrap/Card';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';

function ShopLoader(props) {

    if (props.isLoading) {  // Catch errors
        return (
            <Loading />
        );
    }
    if (props.errMess) {
        return (
        <div className="col">
            <p>{props.errMess}</p>
        </div>
        );
    }

    let items = props.items;    //THE GREAT FILTER

    if (props.under5) {
        items = items.filter(item => item.tags.includes('under 5'));
    }

    items = items.sort((itemA, itemB) => compare(itemA, itemB, props.sort));

    function compare(itemA, itemB, sortType) {
        if (sortType === 'date-oldest') {
            if (itemB.id >= itemA.id) {
                return -1;
            } else {
                return 1;
            }
        } else if (sortType === 'date-newest') {
            if (itemB.id >= itemA.id) {
                return 1;
            } else {
                return -1;
            }
        } else if (sortType === 'price-highest') {
            if (itemB.price >= itemA.price) {
                return 1;
            } else {
                return -1;
            }
        } else if (sortType === 'price-lowest') {
            if (itemB.price >= itemA.price) {
                return -1;
            } else {
                return 1;
            }
        }
    }
    
    items = items.map(item => {
        return (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
                <Card>
                    <Card.Img variant="top" src={baseUrl + item.image1} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.summary.length > 150 ? 
                            item.summary.slice(0,150).trim() + '...'
                            : item.summary
                        }</Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <p className="bottom">$ {item.price.toFixed(2)}</p>
                    </Card.Body>
                </Card>
            </div>
        );
    });

    return (
        <React.Fragment>
            {items}
        </React.Fragment>
    );
}

class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            under5: false,
            sort: 'date-oldest'
        };

        this.filterUnder5 = this.filterUnder5.bind(this);
    }

    filterUnder5() {
        this.setState({under5: !this.state.under5});
    }

    changeSort = event => {
        this.setState({sort: event.target.value});
    };

    render() {
        return (
            <div className="shop">
                <div className="header">
                    <h2>Shop</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 tag">
                            <p>
                                Looking for a specific item? Feel free to use the filter tags below, 
                                or the search bar above to browse through the whole website!
                            </p>
                            <p>
                                WARNING: Do not buy anything from me.
                            </p>
                            <p>
                                Tags being filtered: {this.state.under5 ? 'Under $5' : ''}
                            </p>
                        </div>                     
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6" style={{textAlign: 'center'}}>
                            <ToggleButton
                                id='under5'
                                type='checkbox'
                                variant='outline-primary'
                                checked={this.state.under5}
                                onClick={this.filterUnder5}
                            >
                                Under $5
                            </ToggleButton>
                        </div>
                        <div className="col-12 col-md-6" style={{textAlign: 'center'}} id='sort'>
                            <p>Filter by: </p>
                            <Form>
                                <Form.Control
                                    aria-label='Shop Sort'
                                    as='select'
                                    onChange={this.changeSort}
                                >
                                    <option value='date-oldest'>Date (oldest first)</option>
                                    <option value='date-newest'>Date (newest first)</option>
                                    <option value='price-highest'>Price (highest first)</option>
                                    <option value='price-lowest'>Price (lowest first)</option>
                                </Form.Control>
                            </Form>
                        </div>
                    </div>
                    <div className="row">
                        <ShopLoader 
                            isLoading={this.props.items.isLoading}
                            errMess={this.props.items.errMess}
                            items={this.props.items.items}
                            under5={this.state.under5}
                            sort={this.state.sort}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;