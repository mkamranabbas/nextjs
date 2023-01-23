'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

async function addTodo(name,refresh:()=>void){
    await fetch('/api/todo/add',  
    {
      method:'POST',
    //   mode:"no-cors",
      body:JSON.stringify({name})
  
    });
  
    refresh();
  }

export default function AddToDo() {

    const router = useRouter();
    let [name,setName] = useState("");

    return (
        <div>
            <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
            <button onClick={(e)=>{addTodo(name,router.refresh)}} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2">Add</button>
        </div>
    )
}