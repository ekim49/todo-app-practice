import styled from 'styled-components';
import TodoForm from './TodoForm';

const TodoHeadContainer = styled.div`
  font-size: 2.5rem;
  font-weight: 300;
  color: #6b7280;
  padding: 2rem 1rem;
`;

const TodoHead = () => {
  return (
    <TodoHeadContainer>
      To Do List
      <TodoForm />
    </TodoHeadContainer>
  );
};

export default TodoHead;
