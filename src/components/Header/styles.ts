import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > img {
    cursor: pointer;
  }
`;

export const NewTransactionButton = styled.button`
  padding: 0.75rem 1.25rem;
  font-weight: bold;
  line-height: 1.6;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['green-500']};
  border-radius: 6px;
  transition: background-color 200ms;

  &:hover {
    background-color: ${(props) => props.theme['green-300']};
  }
`;
