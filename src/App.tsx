import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const data = () => {
  const dataArray = [];
  for(let i = 0; i<10; i++){
    dataArray.push({
      id:i+1,
      text:`할일${i+1}`,
      checked: false,
    })
  }
  return dataArray;
}

const  App:React.FC = ()=> {
  const [todos, setTodos] = useState(data);
  const nextId = useRef(11);

  const onInsert = useCallback(
    (text:string) => {
      const todo = {
        id:nextId.current,
        text,
        checked:false,
      };
      setTodos((todos)=>todos.concat(todo));
      nextId.current +=1;
    },
    [todos]
  );

  const onRemove = useCallback((id:number)=>{
    setTodos((todos)=>todos.filter((todo)=>todo.id !== id));
    },
    [todos]
  )

  const onToggle = useCallback(
    (id:number) => {
      setTodos((todos) => todos.map((todo) => todo.id ===id ? {...todo, checked: !todo.checked} : todo));
    },[todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos = {todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
}

export default App;
