import AddToDo from "./add-todo-item";
import ToDoList from "./todo-list";

export default function Home() {
    return (

      <>
        <section className=" pt-1 p-3 text-center">
          <AddToDo />
        </section>

        <section className=" pt-1 p-3 ">
          <ToDoList />        
        </section>
      </>
      
    )
  }