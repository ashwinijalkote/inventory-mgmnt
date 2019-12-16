import React from 'react';


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onChangeText = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleLogin = () => {
        
    }

    render() {
        return <div class="login">
            <div class="username">
                <label>Username: </label>
                <input type="text" name="username" onChange={this.onChangeText} value={this.state.username}/>
            </div>
            <div class="password">
                <label>Password: </label>
                <input type="password" name="password" value={this.state.password} onChange={this.onChangeText}/>
            </div>
                <button onclick={this.handleLogin}>Login</button>
        </div>

    }
}