import React, {Component} from 'react';
import Description from "./layout/Description";
import "./Login.scss";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            password: ""
        };
    }

    visibility = () => this.setState({hidden: !this.state.hidden});

    onChangePassword = () => this.setState({password: this.props.password});

    componentDidMount() {
        if (this.props.password) {
            this.setState({password: this.props.password})
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        const {hidden, password} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
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
            </form>
        )
    }
}

export default Login;
