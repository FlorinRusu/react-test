import React, {Component} from 'react';

class Login extends Component {

    state = {};

    onSubmit = (e) => {
        e.preventDefault();

    };

    render(){
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                <div className="login padding">
                    <h1>Welcome</h1>
                    <p>Please sign in to continue</p>
                    <hr/>
                    {/*<img src={require("../../static/logo-ge-light.svg")} alt="" id="logo"/>*/}
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="username">Username</label>
                        <input name="username"
                               type="text"
                               className="form-control"
                               placeholder="Enter your email"
                               onChange={this.props.onChange}
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            name="password"
                            type={this.props.showPass ? "text" : "password"}
                            className="form-control"
                            placeholder="Enter your password"
                            onChange={this.props.onChange}
                            value={this.props.pass}
                        />

                        <button type="submit" className="btn btn-primary">
                            Sign in
                        </button>
                        <button type="button" onClick={this.props.triggerModal}
                                className="btn btn-link btn-sm right">Forgot password?
                        </button>
                        <a className="inputLink"
                           onClick={this.props.togglePass}>{this.props.showPass ? "Hide" : "Show"}</a>
                        <hr className="desktop"/>
                        <div className="half left desktop">
                            <h1>LATEST BLOG POST</h1>
                            <p>October 15, 2018</p>
                            <p>Create Efficiency with a<br/>
                                Creative Asset Management<br/>
                                Platform</p>
                        </div>
                        <div className="half right desktop">
                            <h1>RECENT TWEET</h1>
                            <p>April 25, 2018</p>
                            <p>#HenryStewartEvents are<br/>
                                bringing their #CreativeOps<br/>
                                Show to NYC for the third...</p>
                        </div>
                    </form>
                </div>
            </form>

        )
    }
}

export default Login;
