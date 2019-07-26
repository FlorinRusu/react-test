import React from "react";
import "./PasswordReset.scss";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function PasswordReset() {
    return (
        <div className="modal display">
            <div className="title">
                <p>Password Reset</p>
                <button className="icon">
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
                <button type="submit" className="btn btn-primary sbm">Submit</button>
                <button type="submit" className="btn btn-primary cnl">Cancel</button>
            </div>
        </div>
    );
}

export default PasswordReset;
