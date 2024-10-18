import { MoonIcon, SunIcon } from "@/shared/assets/icons";
import useTheme from "@/shared/lib/useTheme";
import IconButton from "@/shared/ui/iconButton/iconButton";
import s from "./changeTheme.module.scss";

function ChangeTheme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <IconButton onClick={toggleTheme} className={s.themeBtn}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
}

export { ChangeTheme };
