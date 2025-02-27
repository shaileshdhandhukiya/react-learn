import React from "react";
import Todo from "./Todo";

function TodoContainer({todos,delTodo}) {
    return ( 
        <>
        <div className="todo-list">
          {todos.map((todo,index)=>{
            return <Todo todo={todo} key={todo} index={index} delTodo={delTodo} />
          })}
        </div>
        </>
     );
}

export default TodoContainer;