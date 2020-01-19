import React, { Component } from 'react';


class Loading extends Component {
    render() {
        return (
            <div>
                <div class="spinner-border text-secondary" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>
        );
    }
}

export default Loading;