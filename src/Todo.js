import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({ todoObj }) {
  return (
      <div className="Todo">
        <div>
          <b>{todoObj.title}</b> 
          <small>(Priority: {todoObj.priority})</small>
        </div>
        <div>
          <small>{todoObj.description}</small>
        </div>
      </div>
  );
}

export default Todo;

//small tags rendering in browser as larger, bootstrap specs have changed
//browser's small tag specs reflect desired size when bootstrap style is unchecked
//user agent stylesheet = browser CSS file, applied first


//TODO: you don't want to talk about the type of the thing (obj), change todoObj => todoData
//TODO: then update wherever todoObj is used