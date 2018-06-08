import React, { Component } from 'react';
import "react-router";
import './App.css'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Form from './Form.js';
import logo from './logo.svg';



 class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
               
                    <h2>Google App</h2>
                </div>
                <Form />
            </div>
        );
    }
} export default App;
