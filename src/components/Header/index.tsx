import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';
import dtMoneyLogo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={dtMoneyLogo} alt="" />
        </NavLink>
        <NewTransactionButton type="button">
          Nova transação
        </NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
