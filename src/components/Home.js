import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Home.css';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: false
        };
    }
    toggleLogin = () => {
        this.setState((prevState) => ({ 
            showLogin: !prevState.showLogin }));
    }


    render() {
        return (
            <div>
                <img src="https://www.ironhack.com/assets/shared/logo.svg" alt="Ironhack logo" />

                <h1>Mix n' Match</h1>

                <Link to="/Login">
                    <button classname='nav-button'>Login</button>
                </Link>
                <br/>
                <Link to="/UserProfile">
                    <button classname='nav-button'>User Profile</button>
                </Link>
                <br/><br/>

                <button onClick={this.toggleLogin}>
                    {this.state.showLogin ? "Hide Login" : "Show Login"} Login
                    </button>

                {this.state.showLogin && <Link to="/Login">Login</Link>}



                {/* <Router>
                    <div className="App">
                        Hello, World!
                    </div>
                </Router> */}
            </div>

        )
       
    }
}

export default Home;