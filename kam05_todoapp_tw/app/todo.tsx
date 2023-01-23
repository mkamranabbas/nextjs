'use client';

import { useRouter } from "next/navigation";

async function update(id,isDone,refreshFunc:()=>void){
  /*await fetch('http://localhost/sleeklogics/services/updatetodolist.php',*/
  await fetch('/api/todo/update',  
  {
    method:'POST',
    mode:"no-cors",
    body:JSON.stringify({id, isDone})

  });

  refreshFunc();
}

async function deleteTodo(id,refreshFunc:()=>void){
  await fetch(`/api/todo/delete?id=${id}`,  
  {
    method:'DELETE',
  });
  refreshFunc();
}

export default function Todo({todo}) {

  const router = useRouter();

  return (
    <>
                <input type="checkbox" onChange={(e)=>{update(todo.id,e.target.checked,router.refresh)}} checked={todo.isDone} className="w-4 h-4 m-3 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600" />
                <span className="text-black mx-2 my-3">{todo.name}</span>
                <button className="bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded float-right" onClick={(e)=>{deleteTodo(todo.id,router.refresh)}}> Delete</button>
    </>
  );
}
