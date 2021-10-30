import React, { Component } from 'react';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './Loading';
import { Card } from 'react-bootstrap';

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
    if (props.tags.length > 0) {
        const filter = props.tags.filter(tag =>
            props.article.tags.includes(tag)
        );
        if (filter.length === props.tags.length) {
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
            tags: []
        }
    }

    render() {

        console.log(this.props.articles);
        return (
            <div>
                <div className="header blog">
                    <h2>Blog</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <p>Looking for a specific article? Feel free to use the filter tags below, 
                            or the search bar above to browse through the whole website!
                        </p>
                        <p>Note: search is not currently working right now.</p>
                    </div>
                    <div className="row">
                        <IsLoading 
                            isLoading={this.props.articles.isLoading}
                            errMess={this.props.articles.errMess}
                            articles={this.props.articles.articles}
                            tags={this.state.tags}
                        />
                    </div>
                </div>
            </div>
        );
    }
        
}

export default Blog;