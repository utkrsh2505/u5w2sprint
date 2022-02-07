import React from "react";
import style from "./todo.module.css";
import { useState } from "react";
const TodoList = ({ title, status, id ,edit,handleDelete,handleSave,handleEdit}) => {
  
    return (
    <div>
            {edit ? <div><input/> <button  className={style.del_btn} onClick={()=>handleSave(id)}>Save</button></div> : (<div  style={{display : "flex",
   
   alignItems: "center",
   justifyContent: "space-evenly",
   fontSize: "20px",
   width: "400px",
   margin: "auto",
   padding: "10px",
   borderBottom: "1px solid black"}}>
            <div >
          
          <h5>{title}</h5>
          </div>
             <div>
          <p>{status}</p>
          </div>
          <div>
             <button className={style.del_btn} onClick={()=>{handleDelete(id)}}>Delete</button> 
          </div>
          <button  className={style.del_btn} onClick={()=>handleEdit(id)}>Edit</button>
          </div>)}
      
      
      
    </div>
  );
};
export { TodoList };
