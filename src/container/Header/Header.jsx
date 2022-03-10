import styles from "./Header.module.css";
import { Button } from "../../components";

const Header = ({ title, subtitle, btnText, img, patternImg1 }) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__flex}>
          <div className={styles.header__info}>
            <h1 className={styles.header__title}>{title}</h1>
            <p className={styles.header__subtitle}>{subtitle}</p>
            <Button btnType={"btn__primary"}>{btnText}</Button>
          </div>
          <div className={styles.header__img}>
            <img src={patternImg1} alt="pattern 1" />
            <img src={img} alt="hero" />
            <img src={patternImg1} alt="pattern 2" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
