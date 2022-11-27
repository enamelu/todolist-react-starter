import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState } from 'react';


const dummyTodos = [
  {
    title: 'Learn react-router',
    isDone: true,
    id: 1,
  },
  {
    title: 'Learn to create custom hooks',
    isDone: false,
    id: 2,
  },
  {
    title: 'Learn to use context',
    isDone: true,
    id: 3,
  },
  {
    title: 'Learn to implement auth',
    isDone: false,
    id: 4,
  },
];

const TodoPage = () => {
  const [todos, setTodos] = useState(dummyTodos);
  const [inputValue, setInputValue] = useState('');
  const handleChange = (value) => {
    setInputValue(value);
  };
  const handleAddTodo = () => {
    if (inputValue.length === 0) {
      return;
    }
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random() * 100,
          title: inputValue,
          isDone: false,
        },
      ];
    });
    setInputValue('');
  };
  const handleKeyDowm = () => {
    if (inputValue.length === 0) {
      return;
    }
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random() * 100,
          title: inputValue,
          isDone: false,
        },
      ];
    });
    setInputValue('');
  };
  
  return (
    <div>
      TodoPage
      <Header username="coffee" />
      <TodoInput
        inputValue={inputValue}
        onChange={handleChange}
        onAddTodo={handleAddTodo}
        onKeyDown={handleKeyDowm}
      />
      <TodoCollection todos={todos} />
      <Footer />
    </div>
  );
};
export default TodoPage;

 