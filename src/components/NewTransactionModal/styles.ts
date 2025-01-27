import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 2.5rem 3rem;
  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 6px;

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      background-color: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      padding: 1rem;
      border-radius: 6px;
      flex: 1;

      input::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      margin-top: 1.5rem;
      padding: 0 1.25rem;

      height: 58px;
      font-weight: bold;
      line-height: 1.6;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['green-500']};

      border-radius: 6px;
      transition: background-color 200ms;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme['green-300']};
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  background-color: transparent;
  color: ${(props) => props.theme['gray-500']};
  line-height: 0;
`;

export const TransactionTypeContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProp {
  variant: 'income' | 'outcome';
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;

  background-color: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};
  line-height: 1.6;
  border-radius: 6px;
  transition: background-color 100ms, color 100ms;

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
    transition: color 100ms;
  }

  &[data-state='unchecked']:hover {
    background-color: ${(props) => props.theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background-color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-700']
        : props.theme['red-400']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`;
