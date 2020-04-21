import { Component } from "react";
import React from "react";
import BlockView from "../components/BlockView";
import TransactionView from "../components/TransactionView";
import { CardDeck } from 'react-bootstrap';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            transactions: []
        }
    }

    onOpen(index) {
        const key = index
        let block = this.props.chain[key];
        console.log(block);
        let transactions = block.transactions;

        this.setState({
            open: true,
            transactions: transactions
        })


    }

    render() {
        return (
            <div>
            <h1>Blocks on chain</h1>
            <p>Each card represents a block on the chain</p>
            <CardDeck>
            {this.props.chain.map((block, index)=> 
                <div key={index} onClick={()=> this.onOpen(index)}>
                    <BlockView key={index} hash={block.hash} timestamp={block.timestamp} nonce={block.nonce} previoushash={block.previousHash} title={"Block " + index}></BlockView>
                </div>
            )}
            </CardDeck>

            {this.state.open && this.state.transactions.length > 0 ? 
            <TransactionView 
                transactions={this.state.transactions}
            />
            :
            <p>Either a block without transaction, or not clicked a block yet</p>
            }
            </div>
        );
    }
}

export default Home;