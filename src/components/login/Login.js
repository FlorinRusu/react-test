import React, {Component} from 'react';
import Description from "./layout/Description";
import "./Login.scss";
import PropTypes from 'prop-types';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            password: ""
        };
    }
    static propTypes = {
        onLogin: PropTypes.func.isRequired,
        triggerModal: PropTypes.func.isRequired,
    };
    visibility = () => this.setState({hidden: !this.state.hidden});

    onChangePassword = () => this.setState({password: this.props.password});

    componentDidMount() {
        if (this.props.password) {
            this.setState({password: this.props.password})
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onLogin();
    };

    render() {
        const {hidden, password} = this.state;
        return (
                <div className="login padding" style={{paddingTop: '20px'}}>
                    <div>
                        <form className="form login-form">
                            <div className="form-group">
                                <label>Username</label>
                                <input spellCheck="false" type="text" autoFocus="autofocus"
                                       className="form-control" name="username"
                                       id="username"/>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <div className="input-group">
                                    <input spellCheck="false" className="form-control"
                                           id="password" name="password"
                                           type={hidden ? "password" : "text"}
                                           value={password}
                                           onChange={this.onChangePassword}
                                    />
                                </div>
                                <a className="pass-visibility" onClick={this.visibility}>{hidden ? 'Show' : 'Hide'}</a>
                            </div>
                            <button type="submit" className="btn btn-submit">Sign In</button>
                            <button type="button"
                                    id="forgot-pass" onClick={this.props.triggerModal}
                                    className="btn btn-link btn-sm">Forgot password?
                            </button>
                            <hr className='bottom-hr'/>
                        </form>
                    </div>
                    <Description/>
                </div>
        )
    }
}

export default Login;
