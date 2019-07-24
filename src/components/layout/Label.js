import React from 'react'
import globalLogo from '../../assets/img/logo.svg'

function Label() {
    return (
        <div className="login-label">
            <h1>Welcome</h1>
            <p>Please sign in to continue</p>
            <hr className={'custom-hr'}/>
            <img src={globalLogo} alt="" id="globalLogo"/>
        </div>
    )
}

export default Label;
