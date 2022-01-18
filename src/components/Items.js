import React, { Component } from 'react'
import Item from './Item'

export default class Items extends Component {
    constructor(props){
        super(props)

    }
    render() {
        return (
            <div>
            <ol>
                {this.props.task.map((task ,k)=> {
                    
                    return  <Item taskitem={task}  key={k} removeOneTask= {this.props.removeOneTask}/> } )}
 
            </ol>
            </div>
        )
    }
}
