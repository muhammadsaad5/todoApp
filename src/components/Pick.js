import React, { Component } from 'react'

export default class Pick extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div>
                <button onClick={this.props.pick}>Pick</button>
            </div>
        )
    }
}
