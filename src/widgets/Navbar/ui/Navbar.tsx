import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
  interface INavbarProps {
  className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
  return (
    <div className={classNames(cls.navbar, { className })}>
      <div className={cls.links}></div>
    </div>
  );
};
