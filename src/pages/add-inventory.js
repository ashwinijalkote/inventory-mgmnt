import React from 'react';
import axios from 'axios';

export default  class AddInventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            vendor: '',
            mrp: '',
            batchName: '',
            batchDate: '',
            qty: '',
            status: ''
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onAddInventory =() => {
        axios.post()
            .then((response) => {

        });
    }

    render() {
        return <div className="col-md-12">
            <div className="col-md-8">Add Inventory</div>
            <div className="col-md-8">
                <label className="col-md-2">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.onChange}/>
            </div>
            <div className="col-md-8">
                <label className="col-md-2">Vendor</label>
                <input type="text" name="vendor" value={this.state.vendor} onChange={this.onChange}/>
            </div>
            <div className="col-md-8">
                <label className="col-md-2">MRP</label>
                <input type="text" name="mrp" value={this.state.mrp} onChange={this.onChange}/>
            </div>
            <div className="col-md-8">
                <label className="col-md-2">Batch Name</label>
                <input type="text" name="batchName" value={this.state.batchName} onChange={this.onChange}/>
            </div>
            <div className="col-md-8">
                <label className="col-md-2">Batch Date</label>
                <input type="text" name="batchDate" value={this.state.batchDate} onChange={this.onChange}/>
            </div>
            <div className="col-md-8">
                <label className="col-md-2">Quantity</label>
                <input type="text" name="qty" value={this.state.qty} onChange={this.onChange}/>
            </div>
            <div className="col-md-8">
                <label className="col-md-2">Status</label>
                <input type="text" name="qty" value={this.state.status} onChange={this.onChange}/>
            </div>
            <div className="col-md-8"><button onClick={this.onAddInventory}>Add</button></div>
        </div>
    }
}