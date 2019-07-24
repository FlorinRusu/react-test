import React, {Component} from 'react';
import Info from "./layout/Info";

const loginStyle = {
        paddingTop: '20px'
    }
;

class Login extends Component {
    // https://edvins.io/show-and-hide-password-in-react/
    state = {};

    onSubmit = (e) => {
        e.preventDefault();

    };

    render() {
        return ( //style={{display:'flex'}}
            <form onSubmit={this.onSubmit}>
                <div className="login padding" style={loginStyle}>

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
                                    <input type="password" className="form-control" id="password"
                                           value="admin-password123"/>
                                    <span className="input-group-append" style={{paddingTop: '10px'}}>
                                         <p>Jesus</p>
                                    </span>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-submit">
                                Sign In
                            </button>
                            <button type="button" onClick={this.props.triggerModal} style={{float:'right',fontSize: '13px', opacity: '', color: '#aaaaaa'}}
                                    className="btn btn-link btn-sm right">Forgot password?
                            </button>
                            {/*<a className="inputLink"*/}
                            {/*   onClick={this.props.togglePass}>{this.props.showPass ? "Hide" : "Show"}</a>*/}
                            <hr/>

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

                    <Info/>
                </div>
            </form>

        )
    }
}

export default Login;
