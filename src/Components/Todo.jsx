import React from "react";
import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { v4 as uuid } from "uuid";
import { TodoList } from "./TodoList";
const Todo = () => {
  const list = [
    {
      title: "Reading",
      status: "false",
      id: 1
    }
  ];
  const [todos, setTodos] = useState(list);

  const handleAdd = (title) => {
    const payload = {
      title: title,
      status: "false",
      id: uuid()
    };
    setTodos([...todos, payload]);
    console.log(todos);
  };

  const handleDelete = (id)=>{
      const deleted = todos.filter((ele)=>{
        return ele.id !== id;
      })
      setTodos(deleted);

  }
  return (
    <>
      <h1>Todo</h1>
      <TodoInput handleAdd={handleAdd} />
      <div>
        {todos.map((item) => {
          return (
            <TodoList
              key={item.id}
              title={item.title}
              status={item.status}
              id={item.id}
              handleDelete = {handleDelete}
            />
          );
        })}
      </div>
    </>
  );
};
export { Todo };
