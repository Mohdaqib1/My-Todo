import React from 'react';
import ShowTodo from './ShowTodo';


const SecondComponent = ({ todos,setTodos}) => {
    console.log(todos);
    return(
<div>
    <ul>{todos.map((todo) => 
    <ShowTodo todos={todos} setTodos={setTodos} key={todo.id} 
    todo={todo} text={todo.text} />)}</ul>
</div>
    );
}


export default SecondComponent;