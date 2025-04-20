import React, { useContext, useState } from 'react'
import ListContext from './Context'

export default function List() {
    let {state , dispatch} = useContext(ListContext)
    let [editId, setEditId] = useState(null)    
    let [newText, setNewText] = useState('')    
    let handleEdit = (todo) => {
        setEditId(todo.id)
        setNewText(todo.list_add)   
    }

    let handleSave = () => {
        dispatch({ type: 'edit_todo', payload: { id: editId, newText } })
        setEditId(null)   
        setNewText('')
    }

    let handleRemove = (id) => {
        dispatch({ type: 'remove_todo', payload: id })
    }

    return (
    <div>
        <h1>Задании:  </h1>
        <div>
          {state.todos.map((todo) => (
            <div key={todo.id}>
               {editId === todo.id ? (
                  <div>
                    <input 
                      value={newText} 
                      onChange={(e) => setNewText(e.target.value)} 
                    />
                    <button onClick={handleSave}>Сақтау</button>
                  </div>
                ) : (
                  <h2 style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.list_add}
                    <input 
                      onChange={() => dispatch({ type: 'toggle_todo', payload: todo.id })} 
                      type="checkbox"
                      checked={todo.completed}
                    />
                  </h2>
                )}

              <button onClick={() => handleEdit(todo)}>Өңдеу</button>
              <button onClick={() => handleRemove(todo.id)}>Жою</button>
            </div>
          ))}
        </div>
    </div>
  )
}
