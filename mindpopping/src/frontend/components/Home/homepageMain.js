import React, { Component } from 'react';
import Background from './background';
import './homepageMain.css';

class HomePageMain extends Component {
    render() {
        return (
            <div id='container'>
                <div class="card" style={{align: 'centre', width: '18rem'}}>
                    <div class="card-text">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                    </div>
                </div>
                <div id="background">
                    <Background />
                </div>
            </div>
        )
    }
}

export default HomePageMain;