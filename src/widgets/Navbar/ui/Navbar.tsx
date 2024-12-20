import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";
interface INavbarProps {
  className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
  const { t } = useTranslation();
  const [isAuth, setIsAuth] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuth(!isAuth);
  }, [isAuth]);

  return (
    <div className={classNames(cls.navbar, { className })}>
      <Modal isOpen={isAuth} onClose={onToggleModal}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, quo!
      </Modal>
      <div className={cls.links}>
        <Button theme={ThemeButton.CLEAR_INVERTED} onClick={onToggleModal}>
          {t("Войти")}
        </Button>
      </div>
    </div>
  );
};
