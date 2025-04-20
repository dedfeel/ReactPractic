import React, { useReducer } from 'react'
import './App.css'
import ListContext from './components/Context'
import AddList from './components/AddList'
import List from './components/List'

let initialState={
  todos: [
    
  ],
  
}

function reducer(state,action){
  switch(action.type){
    case 'list_add':
      return{
        ...state,
        todos: [
          ...state.todos,
          { 
            id: Date.now(),
            list_add: action.payload,
            completed : false
          }
        ],
        
      }
    case 'toggle_todo':
      return{
        todos: state.todos.map((todo)=>
          todo.id === action.payload ? {
            ...todo, completed: !todo.completed}:todo
          
        )
      }
      case 'remove_todo':
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
      
      default: 
        return state
  }
}

function App() {

  const[state, dispatch]= useReducer(reducer, initialState )

  return (
    <div>
      <ListContext.Provider value={{state, dispatch}}>
        <AddList/>
        <List/>
        

      </ListContext.Provider>
      
      
    </div>
  )
}

export default App
