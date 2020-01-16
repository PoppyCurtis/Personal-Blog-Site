import React, { Component } from 'react';
import Background from './background';
import './homepageMain.css';

class HomePageMain extends Component {
    render() {
        return (
            <div className='container'>
                <div className="jumbotron" style={{ position: 'relative', align: 'centre', width: '60%', top: '70px', margin: 'auto', backgroundColor: '#FCF6F5FF' }}>
                    <h2 className="display-4">Hello Holidays...</h2>
                    <hr class="my-4" />
                    <p className="lead" >Unlock you holiday experiences. Your personal site to upload photo albums,
                    write stories and make new memories choosing new destinations.</p>
                </div>
                <div id="background">
                    <Background />
                </div>
            </div>
        )
    }
}

export default HomePageMain;