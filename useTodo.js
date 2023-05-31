import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer-2/todoReducer";

const initialState=[];

const init = ()=>{
  const storedItems = localStorage.getItem('todos');
  return storedItems ? JSON.parse(storedItems) : [];
}
const init2 = ()=>{
  const storedItems = localStorage.getItem('Alltodos');
  return storedItems ? JSON.parse(storedItems) : [];
}

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  const [allTodos, dispatchAll] = useReducer(todoReducer, initialState, init2);
  
  const handleTodo = (todo)=>{
    const action = {
      type: '[TODO]: Add Todo',
      payload: todo,
    }
    const action2 = {
      type: '[TODO]: Add New Task',
      payload: allTodos,
    }
    dispatch(action);
    dispatchAll(action2);
  }
  
  const handleToggleTodo = (id)=>{
    dispatch({
      type: '[TODO] Toggle Done',
      payload: id,
    })
    dispatchAll({
      type: '[TODO] Toggle Done',
      payload: id,
    })
  }

  const completedTodos = ()=>{
    const persistentItems = localStorage.getItem('Alltodos');
    return persistentItems? console.log('true'):0;
  }


  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos])
  
  useEffect(() => {
    localStorage.setItem('allTodos',JSON.stringify(todos));
  }, [allTodos]);
  
  const handleRemoveTodo = (id)=>{
    dispatch({
      type: '[TODO]: Remove Todo',
      payload: id,
    })
  }
  
  return {
    todos,
    handleRemoveTodo,
    handleTodo,
    handleToggleTodo,
    allTodos,
    completedTodos,
    }
}
