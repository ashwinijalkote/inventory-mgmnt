import React from 'react';
import axios from 'axios';
import {PENDING, APPROVED} from './constants';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


export default class InventoryManagement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inventories: [/*{name: 'product1', vendor: 'vendor1', mrp: '20',
                batchNum: 'batch name1', batchDate:'20/11/2019', qty:'10', status:'Pending' },
                {name: 'product2', vendor: 'vendor2', mrp: '40',
                    batchNum: 'batch name2', batchDate:'10/11/2019', qty:'1', status:'Approved' }
            */]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/products')
            .then((response) => {
                console.log(response);
                this.setState({inventories: response.data});
            });
    }

    onApprove = (id) => (e) => {
        axios.patch('http://localhost:8080/products/' + id)
            .then((response) => {
                console.log(response);
                this.setState({inventories: response.data});
            });
    }

    render() {
        return <div className="col-md-12">
            <div className="table-responsive">
                <table className="table table-stripped table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Vendor</th>
                            <th>MRP</th>
                            <th>Batch Name</th>
                            <th>Batch Date</th>
                            <th>Qty</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.inventories.map((product, index) => {
                                return <tr>
                                    <td>{index+1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.vendor}</td>
                                    <td>{product.mrp}</td>
                                    <td>{product.batchNum}</td>
                                    <td>{product.batchDate}</td>
                                    <td>{product.qty}</td>
                                    <td>{product.status === PENDING ?
                                        <button onClick={this.onApprove(product.id)}>Approve </button>:
                                        APPROVED}
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
            <div className="col-md-2">
            <button onClick={this.addInventory}>Add Inventory</button>
            </div>

        </div>


    }
}