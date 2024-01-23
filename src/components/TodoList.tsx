import React, { useCallback } from 'react';
import { List } from 'react-virtualized'; 
import { Todo } from '../model/todo';
import TodoListItem from './TodoListItem';
import "./TodoList.scss"

interface TodoListProps {
  todos: Todo[]; 
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  const rowRenderer: List['props']['rowRenderer'] = useCallback(
    ({ index, key, style }: { index: number; key: string; style: React.CSSProperties }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key as React.Key} // 타입이 React.Key인지 확인하고 명시적으로 지정
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      style={{ outline: 'none' }}
    />
  );
};

export default TodoList;
