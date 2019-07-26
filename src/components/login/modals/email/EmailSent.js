import React from "react";
import "./EmailSent.scss";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';

class EmailSent extends React.Component {

    static propTypes = {
        onClose: PropTypes.func.isRequired,
        isDisplayed: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        onClose: () => {},
        isDisplayed: false,
    };

    render() {
        console.log('confirmation', this.props);
        return (
            <div className={"modal " + (this.props.isDisplayed ? '' : 'hide')}>
                <div className="title">
                    <p>Email Sent</p>
                    <button className="icon" onClick={this.props.onClose}>
                        <FontAwesomeIcon icon={faTimesCircle} size="lg"/>
                    </button>
                </div>
                <div className="modal-text">
                    <p>Thank you, instructions to reset your password have been e-mailed to the address you
                        provided!</p>
                </div>

            </div>
        );
    }
}


export default EmailSent;

