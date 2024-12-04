import { classNames } from "shared/lib/classNames/classNames";
import cls from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "shared/ui/Button/Button";

interface IPageErrorProps {
  className?: string;
}

export const PageError = ({ className }: IPageErrorProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      {t("Неизвестна ошибка")}
      <Button onClick={() => navigate("/")}>
        {t("Вернуться на главную страницу")}
      </Button>
    </div>
  );
};
