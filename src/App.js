import './App.css';
import { useState } from 'react';
import { Form } from './components/Form'
import { ListTodo } from './ListTodo';

function App() {
  const [todo, setTodo] = useState([{id:Date.now(), title: 'test', complete: false}]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      complete: false,
    }

    setTodo((prev) => [
      ...prev,
      newTodo
    ])}

  const removeTodo = (title) => {
    setTodo((prev) => prev.filter((todo) => title === todo.title ))}

  return (
    <div className="App">
      <Form add={ addTodo } />
      <ListTodo todo={todo} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
