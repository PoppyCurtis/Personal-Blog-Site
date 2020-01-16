import React, { Component } from 'react';
import './background.css';

class BackGroundAnimation extends Component {

  render() {
    return (
      <div className="backgroundPic">
        <div className="water">
          <svg>
            <filter id="turbulance" x="0" y="0" width="100%" height="100%">
              <feTurbulence id="sea-filter" numOctaves="3" seed="2" baseFrequency="0.02 0.05"></feTurbulence>
              <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
              <animate xlinkHref="#sea-filter" attributeName="baseFrequency" dur="60s"
                keyTimes="0;0.5;1" values="0.02 0.06;0.04 0.08;0.02 0.06" repeatCount="indefinite"></animate>
            </filter>
          </svg>

        </div>
      </div>
    );
  }
}

export default BackGroundAnimation;