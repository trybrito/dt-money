import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';
import dtMoneyLogo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from '../NewTransactionModal';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={dtMoneyLogo} alt="" />
        </NavLink>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
