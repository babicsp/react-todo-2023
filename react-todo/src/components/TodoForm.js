import React, { usedState } from "react";

function TodoForm() {
  const [input, setInputs] = usedState("");
  return (
    <form className='todo-form'>
      <input
        type='text'
        placeholder='Add a todo'
        value={input}
        name='text'
        className='todo-input'
      />
    </form>
  );
}

export default TodoForm;
