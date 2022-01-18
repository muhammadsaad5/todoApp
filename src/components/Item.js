import React, { Component } from 'react'

export default class Item extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
               <li key={this.props.k}>
               {this.props.taskitem}
             <button onClick={(e) => this.props.removeOneTask(this.props.taskitem)}>x</button>

               </li>
              
            </div>
        )
    }
}
