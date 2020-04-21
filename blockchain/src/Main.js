import { Component } from "react";
import React from "react";
import { Blockchain } from "./BlockChain";
import { Transaction } from "./Transaction.js";
import Navigation from './components/Navigation';
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from './page/Home';
import Settings from './page/Settings'
import Transactions from './page/Transactions';

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const myKey = ec.keyFromPrivate("72728596390677c7c60299e83e78abff8270c3e2c0f87d28a36ade89bfa753f9");
const myWalletAddress = myKey.getPublic('hex');

class Main extends Component {

    walletKeys = [];

    constructor(props) {
        super(props);
        this.state = {
            blockchain: this.props.blockchain
        }
        this.state.blockchain.minePendingTransactions('my-wallet-address');
        this.generateWalletKeys();
    }

    getBlocks() {
        return this.state.blockchain.chain;
    }

    changedifficulty = (ans) => {
        console.log(ans);
        this.state.blockchain.setDifficulty(ans.diff)
        this.state.blockchain.setReward(ans.reward);

        console.log(this.state.blockchain.difficulty);
        console.log(this.state.blockchain.miningReward);
        
    }

    addTransaction = (ans) => {
        this.state.blockchain.addTransaction(ans)
    }

    generateWalletKeys() {
        const key = ec.genKeyPair();

        this.walletKeys.push({
            keyObj: key,
            publicKey: key.getPublic('hex'),
            privateKey: key.getPrivate('hex'),
        });
    }

    render() {
        console.log(this.state.blockchain.difficulty);
        return (
            <BrowserRouter>
                <Navigation/>

            <div className="content">
                <Route exact path="/home" render={(props) => <Home {...props} chain={this.getBlocks()}/>}></Route>
                <Route exact path="/settings" render={(props) => <Settings {...props} 
                                                                    difficulty={this.changedifficulty}
                                                                    diff={this.state.blockchain.difficulty}
                                                                    reward={this.state.blockchain.miningReward} 
                                                                    >
                                                                </Settings>} />
                <Route exact path='/transactions' render={(props) => <Transactions
                                                                        fromAddress={this.walletKeys[0]}
                                                                        addTransaction={this.addTransaction}
                                                                    ></Transactions>}></Route>
          </div>
            </BrowserRouter>
        );
    }
}

export default Main