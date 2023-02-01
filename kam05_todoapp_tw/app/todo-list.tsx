import Todo from './todo';

const getToDos = async () => {
    let todos = await fetch('https://kam00-jsonapi.vercel.app/api/todo/list');
    return todos.json();
}

export default async function getStaticProps() {
    const {todos} = await getToDos();
    //console.log({todos});
    return (
        <div className=''>
           <ul style={{padding:10,}}>
                {todos.map((t) => {
                    return(
                    <li className='todo-item bg-gray-100 m-1 p-1 block min-h-[50px] leading-normal' key={t.id}>
                        <Todo todo={t} />    
                    </li>
                    )
                
            })}
        </ul>
        </div>        
      )
}
