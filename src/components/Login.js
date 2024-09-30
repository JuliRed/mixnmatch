
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class LogIn extends Component {
  constructor (props) {  // Create and initialize state
    super(props)
    this.state = {
      user: {
        //userName: '',
        userName: this.props.user.userName,  // Initialize userName using props input (currentUser in App.js)
        password: ''
      },
      redirect: false  // Redirect property used to trigger Navigation
    }
  }

  // When User Name input is changed, capture the new input value and update state
  handleChange = (e) => {
    const updatedUser = {...this.state.user};  // Create an object for state
    updatedUser.userName = e.target.value;  // Dynamically update object values
    this.setState({user: updatedUser})  // Update state with object values
  }

  // When user clicked "Log In" button, store user data and then redirect to "User Profile" page
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)  // Call mockLogIn method from App.js to store user data
    this.setState({redirect: true})  // Update state to trigger Redirect
  }
  
  render () {
    // Redirect to "User Profile" page when "Log In" button is clicked
    if (this.state.redirect) {  
      return (<Navigate to="/userProfile"/>);
    }

    // Render the login form (and call "handleSubmit" method when "Log In" button is clicked to submit form)
    return (
      <div>
        <h1>Login</h1>
        
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>User Name</label>
            <input type="text" 
                   name="userName" 
                   value={this.props.user.userName} 
                   onChange={this.handleChange} 
            />
          </div>
          <div>
            <label>Password</label>
            <input 
                type="password" 
                name="password"
                value={this.state.user.password} 
                onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button>Log In</button>
        </form>  
        <br/>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}

// Props validation
LogIn.propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    memberSince: PropTypes.string.isRequired
  }).isRequired,
  mockLogIn: PropTypes.func.isRequired
};


export default LogIn;