import React, { Component } from 'react';

import "../Header.css"

class Header extends Component {

    render(){
        return (

            <div className="header">

                <span style={{height:'10vh', width:'100vw'}}></span>

                <div className="title">
                   <h1>The Man.</h1>
                   <h1>The Myth.</h1>
                   <h1>The Chuck Norris.</h1>    
                </div>

            </div>

        )
    }
}

export default Header