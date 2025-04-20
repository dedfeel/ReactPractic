import React, { useContext, useState } from 'react'
import ListContext from './Context'

export default function AddList() {

    let [todo, setTodo] = useState('')
    let {dispatch } = useContext(ListContext)

    let handleSubmit = (e)=>{
        e.preventDefault()
        if(todo.trim()){
            dispatch({type: 'list_add', payload: todo})
            
        }
        setTodo('')
    }

  return (
    <div>
        <h1>Тапсырмалар тізімі</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todo}  placeholder='Жаңа тапсырма енгізіңіз' />
            <button type='submit'>Қосу</button>
        </form>
        
    </div>
  )
}
