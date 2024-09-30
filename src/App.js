import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Login from './components/Login';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        userName: 'johndoe',
        memberSince: '06/01/2021'
      }
    }
  }

  mockLogIn = (logInInfo) => {
    const user = {...this.state.user, userName: logInInfo.userName};
    this.setState({user});
  }


  render() {
    // // Create React elements for the Home, UserProfile, and Login components
    // const Home = () => <h1>Home</h1>;
    // const UserProfile = () => <h1>User Profile</h1>;
    // const Login = () => <h1>Login</h1>;


    return (
      <Router basename='/mixnmatch'>
        <div>
          <h1>Mix n' Match</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/UserProfile' element={<UserProfile />} />
            <Route path='/Login' element={<Login user={this.state.user} mockLogIn={this.mockLogIn} />} />
          </Routes> 
        </div>
      </Router>
    );
  }
}

export default App;
