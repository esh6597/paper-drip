import React, { useState } from 'react';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './Loading';
import Card from 'react-bootstrap/Card';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function IsLoading(props) {
    console.log(props.items);
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
                    <Card.Img variant="top" src={baseUrl + item.image} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.summary.length > 150 ? 
                            item.summary.slice(0,150).trim() + '...'
                            : item.summary
                        }</Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <p className="bottom">{item.price}</p>
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

function Shop(props) {
    const [tag, setValue] = useState('all');
    const handleChange = (val) => {
        setValue(val);
    }

    return (
        <div>
            <div className="header shop">
                <h2>Shop</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 tag">
                        <p>
                            Looking for a specific article? Feel free to use the filter tags below, 
                            or the search bar above to browse through the whole website!
                        </p>
                        <p>
                            Tags being filtered: 
                        </p>
                        <ToggleButtonGroup
                            type='checkbox'
                            value={tag}
                            onChange={handleChange}
                            defaultValue='all'
                            name='tag-toggle'
                            className='blog'
                        >
                            <ToggleButton 
                                id='tag-all' 
                                value='all' 
                                name="tag-toggle"
                                variant='outline-primary'
                            >
                                All
                            </ToggleButton>
                            <ToggleButton 
                                id='tag-tutorial' 
                                value='tutorial' 
                                name="tag-toggle"
                                variant='outline-primary'
                            >
                                Tutorials
                            </ToggleButton>
                            <ToggleButton 
                                id='tag-info' 
                                value='info' 
                                name="tag-toggle"
                                variant='outline-primary'
                            >
                                Informational
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>                        
                </div>
                <div className="row">
                    <IsLoading 
                        isLoading={props.items.isLoading}
                        errMess={props.items.errMess}
                        items={props.items.items}
                        handleFilter={() => this.handleChange()}
                        tag={tag}
                    />
                </div>
            </div>
        </div>
    );
}

export default Shop;