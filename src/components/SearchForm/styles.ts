import styled from 'styled-components';

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 2rem;

    font-weight: bold;
    line-height: 1.6;
    color: ${(props) => props.theme['green-300']};
    background-color: transparent;

    border: 1px solid ${(props) => props.theme['green-300']};
    border-radius: 6px;
    transition: background-color 200ms, border-color 200ms, color 200ms;

    &:hover {
      background-color: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};

      color: ${(props) => props.theme.white};
    }
  }
`;
