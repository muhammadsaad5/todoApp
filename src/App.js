import React, { Component } from "react";
import AddItem from "./components/AddItem";
import Pick from "./components/Pick";
import Items from "./components/Items";
import RemoveAll from "./components/RemoveAll";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      tasks: ["c++", "java", "python", "Php", "javascript"],
      
    };
    this.removeAll = this.removeAll.bind(this);
    this.pick = this.pick.bind(this);
    this.additem = this.additem.bind(this);
    this.removeOneTask = this.removeOneTask.bind(this);
  }
  render() {
    return (
      <div>
        <h1 className="text-red-500">REACT TODO APP</h1>
        <AddItem addItem={this.additem}  />
        <Pick pick={this.pick} />
        <Items task={this.state.tasks} removeOneTask={this.removeOneTask} />
        <RemoveAll removeAll={this.removeAll} />
      </div>
    );
  }
  additem(newTask) {
    if (newTask == "") {
      return "Empty task names are not allowed.";
    } else if (newTask.length < 4) {
      return "Minimum length of a task is 4 characters.";
    }
    else if(this.state.tasks.indexOf(newTask) >= 0){
        return "This is already in the list."
    }
  
    this.setState({ tasks: this.state.tasks.concat(newTask) });
  }
//   componentDidMount(){
//     if(!JSON.parse(localStorage.getItem("tasks")).tasks){
//       this.setState({tasks: []})
//     }
//     else{
//          const t = JSON.parse(localStorage.getItem("tasks"))
//          this.setState({tasks: t.tasks})
//      }
//  }
//     componentDidUpdate(){
       
//         localStorage.setItem("tasks",JSON.stringify(this.state));
//     }
  

  removeOneTask(task) {
    const remainingTasks = this.state.tasks.filter((t) => {
      return t !== task;
    });
    this.setState({ tasks: remainingTasks });
  }
  removeAll() {
    this.setState({ tasks: [] });
  }
  pick() {
    const r = Math.floor(Math.random() * this.state.tasks.length);
    alert(this.state.tasks[r]);
  }
}
