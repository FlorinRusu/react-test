import React from "react";
import "./EmailSent.scss";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function EmailSent() {
    return (
        <div className="modal hide email-sent">
            <div className="title">
                <p>Email Sent</p>
                <button className="icon">
                    <FontAwesomeIcon  icon={faTimesCircle} size="lg"/>
                </button>
            </div>
            <div className="modal-text">
                <p>Thank you, instructions to reset your password have been e-mailed to the address you provided!</p>
            </div>
        </div>
    );
}

export default EmailSent;

