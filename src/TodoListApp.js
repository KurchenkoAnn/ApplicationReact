import React, { Component } from 'react';
import './App.css';



let todoitems = [];
todoitems.push({index:1,value: "To do home task from Math",done : false} );
todoitems.push({index:2, value: "To do home task from programmer",done:true  });
todoitems.push({ index: 2, value: "Learn Docker", done: false });
class TodoList extends Component{
  render(){
    var todoitems = this.props.items.map((item,index)=>{
     return (<TodoListItem key={index} item={item} index={index} removeitem={this.props.removeitem}
     markDone={this.props.markDone}
     ></TodoListItem>);

    });

    return( <div className="list-group">{todoitems} </div>)
  }

}
class TodoListItem extends Component{
  constructor(props){
    super(props);
    this.onClickClose= this.onClickClose.bind(this);
    this.onCliclDone= this.onCliclDone.bind(this);
  }
  onClickClose()
  {
var index= parseInt(this.props.index);
this.props.removeitem(index);


  }
  onCliclDone()
  {
    let index = parseInt(this.props.index);
    this.props.markDone(index);
  }


  render(){
let todoClass= this.props.item.done ? "done" : "undone";
return(
    
<div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
<div class="column">
<div className={todoClass}>
   <span className="glyphicon glyphicon-ok icon" aria-hidden="true"
  onClick={this.onCliclDone}></span>
  </div>
 {this.props.item.value}
</div>
<div class="column">
<button type="button" className="delete is-medium" onClick={this.onClickClose} >&times;</button>
</div>
</div>

);

  }

}
class TodoForm extends Component{
  constructor(props){
    super(props);
    this.onSubmit= this.onSubmit.bind(this);

  }
  onSubmit(event)
  {
    event.preventDefault();
    let newItemValue = this.refs.itemName.value;
    if(newItemValue)
    {
      this.props.addItem({newItemValue});
      this.refs.form.reset();
    }

  }

  render()
  {
    return(
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
       <input class="input is-rounded"  ref="itemName" type="text" placeholder=" Add new task..." ></input><br></br>
       <button type="submit" className="button is-default">ADD</button>
      </form>
    );
  }
}
class TodoHeader extends Component {
  render(){
    return <h1>What do you want to do?</h1>
  }
}

class TodoApp extends Component{
constructor(props)
{
super(props);
this.addItem=this.addItem.bind(this);
this.removeitem=this.removeitem.bind(this);
this.markDone=this.removeitem.bind(this);
this.state={todoitems:todoitems};
}

addItem(todoitem){
  todoitems.unshift({
index: todoitems.length+1,
value: todoitem.newItemValue,
done: false
  });
  this.setState({todoitems: todoitems});


}
removeitem(itemIndex){
 todoitems.splice(itemIndex,1);
 this.setState({todoitems:todoitems});

}
markDone(itemIndex){
let task= todoitems[itemIndex];
todoitems.splice(itemIndex,1);
task.done=!task.done;
task.done ? todoitems.push(task):todoitems.unshift(task);
this.setState({todoitems:todoitems});
}

render(){
  return(
      <div id="main">
      <TodoHeader></TodoHeader>
      <TodoList items={this.props.initItems} removeitem={this.removeitem} markDone={this.markDone}></TodoList>
      <TodoForm addItem={this.addItem}></TodoForm>

      </div>
  )
}


}

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp initItems={todoitems}></TodoApp>
      </div>
    );
  }
}

export default App;