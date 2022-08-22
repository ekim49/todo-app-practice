import { useState } from 'react';
import styled from 'styled-components';

const TodoInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
`;

const TodoInput = styled.input`
  display: flex;
  flex: 1 1 0%;
  appearance: none;
  border: none;
  outline: none;
  background-color: #1f2937;
  padding: 1rem;
  border-radius: 1rem;
  margin-right: 1rem;
  font-size: 1.25rem;
`;

const TodoButton = styled.button`
  display: flex;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  color: #ec4899;
  font-size: 1.25rem;
  font-weight: 700;
  background-image: linear-gradient(to right, #29b6f6, #7c4dff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  transition: 0.4s;
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 0.6;
  }
`;

const TodoForm = () => {
  const [content, setContent] = useState('');
  // const [isDone, setIsDone] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const todo = content;

  //   fetch
  // };

  return (
    <TodoInputWrapper>
      {/* <form onSubmit={handleSubmit}> */}
      <TodoInput
        type="text"
        placeholder="Add a new task"
        required
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></TodoInput>
      <TodoButton>Add To-do</TodoButton>
      {/* </form> */}
    </TodoInputWrapper>
  );
};

export default TodoForm;
