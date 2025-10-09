import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  background-color: var(--color-indigo-600);
  color: var(--color-grey-0);
  border: none;
  border-radius: var(--border-radius-sm);
  padding: 1.2rem 2.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  margin: 1.6rem 0;

  &:hover {
    background-color: var(--color-indigo-700);
  }

  &:active {
    background-color: var(--color-indigo-800);
  }
`;

export default Button;
