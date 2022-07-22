import React from 'react'
import List from "./components/List";
import Mode from './components/Mode';

function App() {
  return (
    <div className="todo-app">
      <Mode/>
      <List/>
    </div>
  );
}

export default App;
