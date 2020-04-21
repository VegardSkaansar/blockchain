import { Component } from "react";
import React from "react";
import { Card, ListGroup } from 'react-bootstrap';
import '../css/block.css'

class BlockView extends Component {

    render() {

        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                </Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <span>Hash</span>
                        <br/>
                        <Card.Text style={{ color: "green" }}>
                            {this.props.hash}
                        </Card.Text>
                        <br/>
                        <span>Hash of previous block</span>
                        <br/>
                        <Card.Text style={{ color: "red" }}>
                            {this.props.previoushash}
                        </Card.Text>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <span>Nonce</span>
                        <br/>
                        <Card.Text>
                            {this.props.nonce}
                        </Card.Text>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <span>Timestamp</span>
                        <br/>
                        <Card.Text>
                            {this.props.timestamp}
                        </Card.Text>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        );
    }
}

export default BlockView;