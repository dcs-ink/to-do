// src/App.js
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { useAuth } from './AuthContext';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const { user, signInWithGoogle, signOut } = useAuth();

  const addTodo = text => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1>My To-Do List</h1>
        {user ? (
          <>
            <div className="user-info">
              <p>Welcome, {user.email}</p>
              <button onClick={signOut}>Sign Out</button>
            </div>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
              <Todo
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            ))}
          </>
        ) : (
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        )}
      </div>
    </div>
  );
}

export default App;