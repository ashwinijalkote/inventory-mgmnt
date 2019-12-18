import React from 'react';
import * as axios from "axios";


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/users')
            .then((response) => {
                console.log(response);
            });
    }

    onChangeText = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleLogin = () => {
        /*axios.post('http://localhost:8080/login')
            .then((response) {

        });*/

        /*axios.get('http://localhost:8080/users')
            .then((response) => {
                console.log(response);
            });*/
    }

    render() {
        return <div class="col-md-12 login">
            <div class="col-md-12 username">
                <label class="col-md-1">Username: </label>
                <input class="col-md-2" type="text" name="username" onChange={this.onChangeText} value={this.state.username}/>
            </div>
            <div class="col-md-12 password">
                <label class="col-md-1">Password: </label>
                <input class="col-md-2" type="password" name="password" value={this.state.password} onChange={this.onChangeText}/>
            </div>
                <button onclick={this.handleLogin}>Login</button>
        </div>

    }
}