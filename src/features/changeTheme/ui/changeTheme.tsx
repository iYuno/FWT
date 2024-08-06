import useTheme from '../../../entities/theme/lib/useTheme';
import Moon from '../../../shared/assets/icons/ui/moonIcon';
import Sun from '../../../shared/assets/icons/ui/sunIcon';
import IconButton from '../../../shared/ui/iconButton/iconButton';
import s from './changeTheme.module.scss';

function ChangeTheme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <IconButton onClick={toggleTheme} className={s.themeBtn}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </IconButton>
  );
}

export default ChangeTheme;
