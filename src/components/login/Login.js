import React, {Component} from 'react';
import Header from "./layout/Header";
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
        return ( //style={{display:'flex'}}
            <form onSubmit={this.onSubmit}>
                <div className="login padding" style={{paddingTop: '20px'}}>

                    <div>
                        <form className="form login-form">
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" autoFocus="autofocus"
                                       className="form-control" name="txtusername"
                                       id="username"/>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <div className="input-group">
                                    <input className="form-control" id="password"
                                           type={hidden ? "password" : "text"}
                                           value={password}
                                           onChange={this.onChangePassword}
                                    />
                                </div>
                                <a className="pass-visibility"  onClick={this.visibility}>{hidden ? 'Show' : 'Hide'}</a>
                            </div>
                            <button type="submit" className="btn btn-submit">
                                Sign In
                            </button>
                            <button type="button"
                                    id="forgot-pass" onClick={this.props.triggerModal}
                                    className="btn btn-link btn-sm">Forgot password?
                            </button>
                            {/*<a className="inputLink"*/}
                            {/*   onClick={this.props.togglePass}>{this.props.showPass ? "Hide" : "Show"}</a>*/}
                            <hr className='bottom-hr'/>

                        </form>
                    </div>


                    {/*<form onSubmit={this.handleSubmit}>*/}
                    {/*    <label htmlFor="username">Username</label>*/}
                    {/*    <input name="username"*/}
                    {/*           type="text"*/}
                    {/*           className="form-control"*/}
                    {/*           placeholder="Enter your email"*/}
                    {/*           onChange={this.props.onChange}*/}
                    {/*    />*/}

                    {/*    <label htmlFor="password">Password</label>*/}
                    {/*    <input*/}
                    {/*        name="password"*/}
                    {/*        type={this.props.showPass ? "text" : "password"}*/}
                    {/*        className="form-control"*/}
                    {/*        placeholder="Enter your password"*/}
                    {/*        onChange={this.props.onChange}*/}
                    {/*        value={this.props.pass}*/}
                    {/*    />*/}

                    {/*    <button type="submit" className="btn btn-primary">*/}
                    {/*        Sign in*/}
                    {/*    </button>*/}
                    {/*    <button type="button"*/}
                    {/*            onClick={this.props.triggerModal}*/}
                    {/*            className="btn btn-link btn-sm right">Forgot password?*/}
                    {/*    </button>*/}
                    {/*    <a className="inputLink"*/}
                    {/*       onClick={this.props.togglePass}>{this.props.showPass ? "Hide" : "Show"}</a>*/}
                    {/*    <hr/>*/}
                    {/*    <Info/>*/}
                    {/*</form>*/}

                    <Header/>
                </div>
            </form>

        )
    }
}

export default Login;
