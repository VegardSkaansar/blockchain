import { Component } from "react";
import React from "react";
import { Container, Form, FormGroup, Button } from 'react-bootstrap';
import {Transaction} from '../Transaction'

class Transactions extends Component {

    constructor(props) {
        super(props);
        this.createTransaction = this.createTransaction.bind(this);
        this.state = {
            fromAddress: this.props.fromAddress.publicKey,
            toAddress: "",
            amount: 0,
        }
    }

    createTransaction(e) {
        let transaction = new Transaction(this.state.fromAddress, this.state.toAddress, this.state.amount);
        transaction.signTransaction(this.props.fromAddress.keyObj);
        this.props.addTransaction(transaction);
    }
    
    render() {
        return (
            <Container>
                <h1>Transaction</h1>
                <Form onSubmit={this.createTransaction}>
                    <FormGroup controlId="formdiff">
                        <Form.Label>fromAddress</Form.Label>
                        <Form.Control disabled={true} value={this.state.fromAddress} type="text"></Form.Control>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>toAddress</Form.Label>
                        <Form.Control value={this.state.toAddress} type="text" onChange={e => this.setState({toAddress: e.target.value})}></Form.Control>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>amount</Form.Label>
                        <Form.Control value={this.state.amount} type="text" onChange={e => this.setState({toAddress: e.target.value})}></Form.Control>
                    </FormGroup>
                    <Button block type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Transactions;