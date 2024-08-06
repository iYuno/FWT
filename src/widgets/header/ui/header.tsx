import ChangeTheme from '../../../features/changeTheme/ui/changeTheme';
import Logo from '../../../shared/assets/icons/ui/logoIcon';
import s from './header.module.scss';

function Header() {
  return (
    <header className={s.header}>
      <Logo className={s.logo} />
      <ChangeTheme />
    </header>
  );
}

export default Header;
