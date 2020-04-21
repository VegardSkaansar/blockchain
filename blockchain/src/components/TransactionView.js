import { Component } from "react";
import React from "react";
import { Table } from 'react-bootstrap';

class TransactionView extends Component {

    render() {
        return(
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>From Address</th>
                        <th>To Address</th>
                        <th>Amount</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.transactions.map((transaction, index)=>
                 <tr key={index}> 
                    <td>{index}</td>
                    {transaction.fromAddress !== null ? 
                    <td>{transaction.fromAddress}</td>
                    :
                    <td>System</td>
                    }
                    <td>{transaction.toAddress}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.timestamp}</td>
                 </tr>
                )}
                </tbody>
            </Table>
        );
    }
}

export default TransactionView;