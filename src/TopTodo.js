import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todosList }) {
  // lowest-priority # is the highest priority

  let top = todosList.reduce(
      (acc, cur) => cur.priority < acc.priority ? cur : acc, todosList[0]);

  return (<Todo todoObj={top} />);
}

export default TopTodo;