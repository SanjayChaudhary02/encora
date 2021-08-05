import { createSlice } from "@reduxjs/toolkit";

function getId(state) {
    return state.todos.reduce((maxId, todo) => {
      return Math.max(todo.id, maxId)
    }, -1) + 1
  }

export const todoSlice = createSlice({
    name: "todo",
    initialState : {todos:[]},
    reducers : {
        addTodo: (state, action) => {
            return{
                ...state,
                todos : [...state.todos,{title:action.payload.title, desc: action.payload.desc, id:getId(state)}]
            }
        },
        completeTodo: (state, action) => {

        },
        deleteTodo: (state, action) => {
            return {
                ...state,
                todos: state.todos.filter((todo) => {
                  return todo.id !== action.payload.id
                })
              }
        },
        updateTodo: (state, action) => {
            return {
                ...state,
                todos: state.todos.map((todo) => {
                  return todo.id === action.payload.id ?
                  Object.assign({}, todo, {title: action.payload.title}) : todo
                })
              }
        }
    }
});
export const { addTodo, completeTodo, deleteTodo, updateTodo } = todoSlice.actions;
export const selectTodo = (state) => state.todo.todos;
export default todoSlice.reducer;