import { Component } from "react";
import React from "react";
import { Container, Form, FormGroup, Button } from 'react-bootstrap';

class Settings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            diff: this.props.diff,
            reward: this.props.reward
        }

        console.log(this.props.diff);
        console.log(this.props.reward);
        this.changeSettings = this.changeSettings.bind(this);
    }

    changeSettings(e) {
        this.props.difficulty({diff:this.state.diff, reward:this.state.reward});
        e.preventDefault();
    }

    render() {
        return (
            <Container>
                <h1>Settings</h1>
                <Form onSubmit={this.changeSettings}>
                    <FormGroup controlId="formdiff">
                        <Form.Label>Difficulty</Form.Label>
                        <Form.Control value={this.state.diff} type="number" onChange={e => this.setState({diff: e.target.value})}></Form.Control>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>mining reward</Form.Label>
                        <Form.Control value={this.state.reward} type="number" onChange={e => this.setState({reward: e.target.value})}></Form.Control>
                    </FormGroup>
                    <Button block type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Settings;