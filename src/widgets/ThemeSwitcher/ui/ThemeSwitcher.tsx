import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { useTheme } from "app/providers/ThemeProvider";
import SunIcon from "shared/assets/icons/sun.svg";
import MoonIcon from "shared/assets/icons/moon.svg";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      {theme === Theme.DARK ? <SunIcon width={16} /> : <MoonIcon width={16} />}
    </Button>
  );
};
