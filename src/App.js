import React, {Component} from 'react';
import './App.scss';
import Label from "./components/login/layout/Label";
import Login from "./components/login/Login";
import PasswordReset from "./components/login/modals/password/PasswordReset"
import EmailSent from "./components/login/modals/email/EmailSent"

export class App extends Component {
    render() {
        return (
            <div className="main-login">
                <div>
                    <EmailSent/>
                    <PasswordReset/>
                    <Label/>
                    <Login/>
                </div>
            </div>
        );
    }
}
export default App;
