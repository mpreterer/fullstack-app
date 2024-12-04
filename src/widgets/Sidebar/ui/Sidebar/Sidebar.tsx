import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

interface ISidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

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
        <button data-testid="sidebar-toggle-test" onClick={onToggle}>
          toggle
        </button>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
