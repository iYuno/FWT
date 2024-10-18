import { ChangeTheme } from "@/features/changeTheme";
import { LogoIcon } from "@/shared/assets/icons";
import s from "./header.module.scss";

function Header() {
  return (
    <header className={s.header}>
      <LogoIcon className={s.logo} />
      <ChangeTheme />
    </header>
  );
}

export { Header };
