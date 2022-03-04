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
