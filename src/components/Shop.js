import React, { Component, useState } from 'react';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './Loading';
import Card from 'react-bootstrap/Card';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function IsLoading(props) {

    if (props.isLoading) {
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
    
    const items = props.items.map(item => {
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
            under5: false
        };

        this.filterUnder5 = this.filterUnder5.bind(this);
    }

    filterUnder5() {
        this.setState({under5: !this.state.under5});
    }

    render() {
        console.log(this.props.toString());
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
                        <div className="col-12 col-md-6" style={{textAlign: 'center'}}>
                            <p>Sort by: </p>
                        </div>
                    </div>
                    <div className="row">
                        <IsLoading 
                            isLoading={this.props.items.isLoading}
                            errMess={this.props.items.errMess}
                            items={this.props.items.items}
                            under5={this.state.under5}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;