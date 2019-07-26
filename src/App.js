import React, {Component} from 'react';
import './App.scss';
import Label from "./components/login/layout/Label";
import Login from "./components/login/Login";
import PasswordReset from "./components/login/modals/password/PasswordReset"
import EmailSent from "./components/login/modals/email/EmailSent"
import {submitLogin, toggleConfirmation, togglePassword} from "./actionCreators";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export class App extends Component {

    static propTypes = {
        toggleResetPwd: PropTypes.func.isRequired,
        togleCnfrm: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
        isResetDisplayed: PropTypes.bool.isRequired,
        isConfirmationDisplayed: PropTypes.bool.isRequired,
    };
    static defaultProps = {
        isResetDisplayed: false,
        isConfirmationDisplayed: false,
    };

    render() {
        return (
            <div className="main-login">
                <div>
                    <EmailSent isDisplayed={this.props.isConfirmationDisplayed} onClose={this.props.togleCnfrm}/>
                    <PasswordReset isDisplayed={this.props.isResetDisplayed} onClose={this.props.toggleResetPwd}
                                   onSubmit={this.props.togleCnfrm}/>
                    <Label/>
                    <Login/>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        isResetDisplayed: state.isResetDisplayed,
        isConfirmationDisplayed: state.isConfirmationDisplayed,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: bindActionCreators(submitLogin, dispatch),
        togleCnfrm: bindActionCreators(toggleConfirmation, dispatch),
        toggleResetPwd: bindActionCreators(togglePassword, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
