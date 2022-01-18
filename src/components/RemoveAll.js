import React, { Component } from 'react'

export default class RemoveAll extends Component {
        constructor(){
            super()
        }
    render() {
        return (
            <div>
               <button onClick={this.props.removeAll}>REMOVE ALL TASK </button>
            </div>
        )
    }
}
