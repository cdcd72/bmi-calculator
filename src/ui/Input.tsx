import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 1.2rem 1.6rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  font-size: 1.6rem;
  color: var(--color-grey-700);
  background-color: var(--color-grey-0);

  &:focus {
    outline: none;
    border-color: var(--color-indigo-500);
    box-shadow: 0 0 0 3px var(--color-indigo-100);
  }

  &::placeholder {
    color: var(--color-grey-400);
  }
`;

export default Input;
