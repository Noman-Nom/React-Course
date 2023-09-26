import React, { useEffect } from 'react'
import { useState } from 'react'



import './App.css'
import { TodoProvider } from './Contexts'
import { TodoForm, TodoItem } from './components'

function App() {
  // ............states.................
  
  const [todos, setTodos] = useState([])


  // ...functions ...........
  const addTodo = (todo)=>{
          // setTodos(todo)   // ye aproach ghlt he q k hamri prev sari values arry se delete hojayengi 
        //  new approach 

        setTodos((prev)=>[{id: Date.now(),...todo },...prev])

  }

  const updateTodo = (id, todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id=== id ? todo : prevTodo)))

  }

   const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((todo)=>todo.id !==id))
   }

   const toggleCompleted = (id)=>{
    setTodos((prev)=> prev.map((prevTodo)=>prevTodo.id===id ? {...prevTodo, completed: !prevTodo.completed  }:prevTodo))

   }


  //  ...............Use Effect .................
  useEffect(()=>{
            const todos = JSON.parse(localStorage.getItem('todos')) 

            if(todos && todos.length> 0){
              setTodos(todos)
            }
  },[])


  //  2nd useEffect is use for adding context api data in localstorage when todos add in our web 
      useEffect(()=>{
            localStorage.setItem("todos", JSON.stringify(todos))
      },[todos])


  return (

      <TodoProvider value={{todos, addTodo , deleteTodo , updateTodo , toggleCompleted}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 

                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}

                       {todos.map((todo)=>(
                        <div key={todo.id}
                        className='w-full'
                        >

                            <TodoItem todo={todo}/>
                        </div>
                       ))} 
                    </div>
                </div>
            </div>
            </TodoProvider>
  )
}

export default App
