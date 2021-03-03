import React from 'react';
import {Card,Button} from 'react-bootstrap';

const News = (props) => {
    const {title,author,description,publishedAt}=props.article;
    return (
        <Card style={{ width: '18rem' }}>
            
            <Card.Body>
                <Card.Title>News Title : {title}</Card.Title>
                <Card.Text> Author : {author}</Card.Text>
                <Card.Text> Description : {description}</Card.Text>
                <Card.Text> Published : {publishedAt}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        
    );
};

export default News;