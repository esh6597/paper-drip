import React, { Component, useState } from 'react';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './Loading';
import Card from 'react-bootstrap/Card';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function TagGroup() {
    const [tag, setValue] = useState('all');
    const handleChange = (val) => {
        setValue(val);
        console.log(val);
    }
    
    return (
        <ToggleButtonGroup
            type="radio"
            value={tag}
            onChange={handleChange}
            defaultValue='all'
            name="tag-toggle"
        >
            <ToggleButton id='tag-all' value={'all'} name="tag-toggle">
                All
            </ToggleButton>
            <ToggleButton id='tag-tutorial' value={'tutorial'} name="tag-toggle">
                Tutorials
            </ToggleButton>
            <ToggleButton id='tag-info' value={'info'} name="tag-toggle">
                Informational
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

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

    const articles = props.articles.map(article => {
        return (
            <div key={article.id} className="col-12 col-sm-6 col-md-4">
                <Card>
                    <Card.Img variant="top" src={baseUrl + article.image} />
                </Card>
            </div>
        );
    });

    return (
        <React.Fragment>
            {articles}
        </React.Fragment>
    );
    
}

function FilterArticle(props) {
    if (props.tag.length > 0) {
        const filter = props.tag.filter(tag =>
            props.article.tag.includes(tag)
        );
        if (filter.length === props.tag.length) {
            return (
                <Card>

                </Card>
            );
        }
    } else {
        return (
            <div className="col-12 col-sm-6 col-md-4">
                <Card>
                    <Card.Img variant="top" src={baseUrl + props.article.image} />
                </Card>
            </div>
        );
    }
}

class Blog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tag: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({tag: value.toString()})
    }

    render() {

        return (
            <div>
                <div className="header blog">
                    <h2>Blog</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 tag">
                            <p>
                                Looking for a specific article? Feel free to use the filter tags below, 
                                or the search bar above to browse through the whole website!
                            </p>
                            <TagGroup />
                        </div>                        
                    </div>
                    <div className="row">
                        <IsLoading 
                            isLoading={this.props.articles.isLoading}
                            errMess={this.props.articles.errMess}
                            articles={this.props.articles.articles}
                            tag={this.state.tag}
                        />
                    </div>
                </div>
            </div>
        );
    }
        
}

export default Blog;