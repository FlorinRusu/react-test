import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Label from "./components/layout/Label";
import Login from "./components/Login";

export class App extends Component {
    render() {
        return (
            <div>
                <Label/>
                <Login/>
            </div>

        );
    }
}

export default App;
