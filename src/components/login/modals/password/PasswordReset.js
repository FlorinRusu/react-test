import React from "react";
import "./PasswordReset.scss";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import PropTypes from 'prop-types';

class PasswordReset extends React.Component {

    static propTypes = {
        onClose: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired,
        isDisplayed: PropTypes.bool.isRequired,
    };

    static defaultProps = {
         isDisplayed: false,
    };


    render() {
        console.log('PasswordReset', this.props);
        return (
            <div className={"modal displayed " + (this.props.isDisplayed ? '' : 'hide')}>
                <div className="title">
                    <p>Password Reset</p>
                    <button className="icon" onClick={this.props.onClose}>
                        <FontAwesomeIcon icon={faTimesCircle} size="lg"/>
                    </button>
                </div>
                <div className="modal-text">
                    <p>Please enter the email address associated with your globaledit account to
                        reset your
                        password</p>
                    <label className="modal-label">Email Address</label>
                    <input name="username"
                           type="text"
                           id="email-input"
                           className="form-control"
                    />
                </div>


                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary sbm" onClick={this.props.onSubmit}>Submit</button>
                    <button type="submit" className="btn btn-primary cnl" onClick={this.props.onClose}>Cancel</button>
                </div>
            </div>
        );
    }
}
export default PasswordReset;
