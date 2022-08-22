// import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoContainer from './components/TodoContainer';
import TodoHead from './components/TodoHead';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
  body {
    background: #374151;
    font-family: 'Fira sans', sans-serif;
    color: #FFF;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoContainer>
        <TodoHead>
          <TodoForm />
          <TodoList />
        </TodoHead>
      </TodoContainer>
    </>
  );
};

export default App;
