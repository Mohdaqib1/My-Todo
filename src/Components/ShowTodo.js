import React from 'react';
import Delete from './delete.png';

import Edit from './edit.png';

const ShowTodo = ({text,todo, todos, setTodos }) => {
    const deleteHandler = ()=>{
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }    
            return item;
        }));
    };
    return(
        
        <div className="inp">
              
              <table className="t1">
                   <tr>
                        <td className={`todo-item ${todo.completed? "completed" : ""}`}>  {text}
                          <button  onClick={completeHandler} className="b2e" >   <img src={Edit} className="b2ed"/>  </button> 
                           <button  onClick={() => {
    const confirmBox = window.confirm(
      "Do you really want to delete this Crumb?"
    )
    if (confirmBox === true) {
        deleteHandler()
    }
  }} className="b2d">    <img src={Delete}  className="b2ed"/> </button> 
                           </td>
                    </tr>
               </table>
            </div>   
      
    );
}
export default ShowTodo;


