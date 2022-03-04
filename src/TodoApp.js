import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";



/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({initialTodos}) {
  const initialFormData = {title: "", description: "", priority: "",};

  const [todoList, setTodoList] = useState(initialTodos);
  /** add a new todo to list */
  function create(newTodo) {
    const addTodo = {...newTodo, id: uuid()};
    setTodoList(oldTodos => [...oldTodos, addTodo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodoList(oldTodos => oldTodos.map(
      todo => todo.id === updatedTodo.id ? updatedTodo : todo));
  }

  /** delete a todo by id */
  function remove(id) {
    setTodoList(oldTodos => oldTodos.filter(todo => todo.id !== id));
  }

  
  return (
      <main className="TodoApp">
        <div className="row">

          <div className="col-md-6">
            {todoList.length > 0 ?
            <EditableTodoList todos={todoList} update={update} remove={remove}/> 
            : <span className="text-muted">You have no todos.</span>
            }
          </div>

          <div className="col-md-6">
            <section className="mb-4">
              <h3>Top Todo</h3>
              {todoList.length > 0 ? 
              <TopTodo todos={todoList} />
              :<span className="text-muted">No todos yet!</span>}
            </section>

            <section>
              <h3 className="mb-3">Add Nü</h3>
              <TodoForm initialFormData={initialFormData} handleSave={create} />
            </section>
          </div>

        </div>
      </main>
  );
}

export default TodoApp;

