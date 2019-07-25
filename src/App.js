import React, {Component} from 'react';
import './App.scss';
import Label from "./components/login/layout/Label";
import Login from "./components/login/Login";

export class App extends Component {
    render() {
        return (
            <div className="main-login">
                <div>
                    <Label/>
                    <Login/>
                </div>
            </div>
        );
    }
}

// const main = {
//     color: 'white',
//     height: '100%',
//     width: '47%',
//     paddingTop: '134px',
//     paddingLeft: '192px',
//     paddingRight: '192px',
//     // opacity: 0.6,
//     backgroundColor: 'rgba(0,0,0,0.6)'
// };
//Left-block-width:  895.87px - 896 ~ px
//Inner-padding-left: 191.89px ~ 192px
//Inner-padding-top: 135.54px ~

export default App;
