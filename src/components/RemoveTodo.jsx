
export const RemoveTodo = ({remove, title}) => {
  
  const handleClick = () => {

    remove(title)
  }

  return (
    <button onClick={handleClick}>
      <div>
        Remove
      </div>
    </button>
  )
}
