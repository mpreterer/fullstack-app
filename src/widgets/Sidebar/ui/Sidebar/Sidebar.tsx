import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import SVG_MAIN_ICON from "shared/assets/icons/home.svg";
import SVG_ABOUT_ICON from "shared/assets/icons/about.svg";
import { useTranslation } from "react-i18next";

interface ISidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      data-testid="sidebar-test"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.Switchers}>
        <Button
          data-testid="sidebar-toggle-test"
          onClick={onToggle}
          className={cls.collapseBtn}
          size={ButtonSize.L}
          square
          theme={ThemeButton.BACKGROUND_INVERTED}
        >
          {collapsed ? ">" : "<"}
        </Button>

        <ThemeSwitcher />
        <div className={cls.items}>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.main}
            className={cls.link}
          >
            <div className={cls.icon}>
              <SVG_MAIN_ICON />
            </div>
            {!collapsed && <span>{t("Главная")}</span>}
          </AppLink>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.about}
            className={cls.link}
          >
            <div className={cls.icon}>
              <SVG_ABOUT_ICON />
            </div>
            {!collapsed && <span>{t("О нас")}</span>}
          </AppLink>
        </div>
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
