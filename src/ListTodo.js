import { RemoveTodo } from "./components/RemoveTodo";

export const ListTodo = ( { todo, removeTodo }) => {
  console.log(todo);
  return (
    <div>
      <ul>
        <li>
          {todo.map(element => (
            <li key={element.id}>
              {element.title} {element.complete ? 'is-complete' : 'is-not-complete'}
            <RemoveTodo remove = {removeTodo} id={element.id}/>
            </li>
          ))}
        </li>
      </ul>
    </div>
  )
}
