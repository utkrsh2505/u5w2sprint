import React from "react";
import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { v4 as uuid } from "uuid";
import { TodoList } from "./TodoList";
import style from "./todo.module.css";
const Todo = () => {
  const list = [
    {
        id: 1,
      title: "Reading",
      status: "true",
    }
  ];
  const [todos, setTodos] = useState(list);
  const [edit,setEdit] = useState(false);
  const [show,setShow] = useState(false);

  const handleAdd = (title) => {
      if(!title){
          return
      }
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
  const handleSave = (id)=>{
      setEdit(false);
      
      

  }
  const handleEdit = (id)=>{
      setEdit(true);
  }
  
  return (
    <>
      <h1>Todo</h1>
      <TodoInput handleAdd={handleAdd} />
       <button  className={style.bt}onClick={()=>{setShow(!show)}}>{show ? ("ShowAll" ): ("Show Completed")}</button>
      <div>
          {show ? (todos.filter((i)=>{
               return(i.status == "true") 
          }).map((item) => {
            return (
              <TodoList
                key={item.id}
                title={item.title}
                status={item.status}
                id={item.id}
                handleDelete = {handleDelete}
                edit={edit}
                handleSave={handleSave}
                handleEdit = {handleEdit}
              />
            );
          })) : (todos.map((item) => {
            return (
              <TodoList
                key={item.id}
                title={item.title}
                status={item.status}
                id={item.id}
                handleDelete = {handleDelete}
                edit={edit}
                handleSave={handleSave}
                handleEdit = {handleEdit}
              />
            )
          }))}
        
      </div>
    </>
  );
};
export { Todo };
