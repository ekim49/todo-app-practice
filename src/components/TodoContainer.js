import styled from 'styled-components';

const TodoContainerBox = styled.div`
  width: 500px;
  height: 750px;
  background: #374151;
  position: absolute;
  top: 0%;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 10% auto;
  border-radius: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;

const TodoContainer = ({ children }) => {
  return (
    <>
      <TodoContainerBox>{children}</TodoContainerBox>
    </>
  );
};

export default TodoContainer;
